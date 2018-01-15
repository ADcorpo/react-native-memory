/**
 * MemoryBoard (Component)
 * 
 * Holds the game's state and logic.
 */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "./Card.js"
import generateCards from "../helpers/BoardHelpers.js"


class MemoryBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: generateCards()};
        this.state.gameEnd = "";
    }

    updateBoard = (id, isHidden) => {
        let flippedCards = this.state.cards.filter(card => card.hidden === false)
        
        if (flippedCards.length === 2) {
            if (flippedCards[0].color === flippedCards[1].color) {
                let pairedColor = flippedCards[0].color;
                // Update state to reflect matching cards
                this.setState((prevState, props) => {
                    let nextState = {};
                    let nextCards = prevState.cards.map(card => {
                        if (card.color === pairedColor) {
                            card.paired = true;
                        }
                        return(card);
                    })

                    nextState.cards = nextCards;
                    
                    if (nextCards.filter(card => card.paired === true).length == this.state.cards.length)
                    {
                        nextState.gameEnd = "Most rewarding game end ever.";
                    }
                    
                    return nextState;
                });
            }
        }
        if (flippedCards.length < 2) {
            // Updating state to reflect card flip
            this.setState((prevState, props) => {
                nextCards = prevState.cards;
                nextCards[id].hidden = !nextCards[id].hidden; 
                return {cards: nextCards};
            });
        }
        else {
            this.setState((prevState, props) => {
                nextCards = prevState.cards.map(card => {
                    let hiddenCard = card;
                    hiddenCard.hidden = true;
                    return(hiddenCard);
                });
                return {cards: nextCards};
            });
        }
    }
    
    render() {
        let cardComponents = this.state.cards.map(card =>
            <Card
                key={card.id}
                id={card.id}
                color={card.color}
                paired={card.paired}
                hidden={card.hidden}
                onFlip={this.updateBoard}/>
        );
        return (
            <View>
                <View style={styles.board}>
                    {cardComponents.slice(0, 6)}
                </View>
                <View style={styles.board}>
                    {cardComponents.slice(6)}
                </View>
                <Text style={styles.victoryText}>
                    {this.state.gameEnd}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    victoryText: {
        textAlign: "center",
        color: "green",
    },
});

export default MemoryBoard;
