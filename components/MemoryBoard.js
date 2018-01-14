import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "./Card.js"
import generateCards from "../helpers/BoardHelpers.js"


class MemoryBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: generateCards()};
    }

    // If the method is not defined by the parent class, I have to make it a fat arrow method???
    updateBoard = (id, isHidden) => {
        let flippedCards = (this.state.cards.filter(card => card.hidden === false))
        
        if (flippedCards.length === 2) {
            if (flippedCards[0].color === flippedCards[1].color) {
                let pairedColor = flippedCards[0].color;
                // Update state to reflect matching cards
                this.setState((prevState, props) => {
                    nextCards = prevState.cards.map(card => {
                        if (card.color === pairedColor) {
                            card.paired = true;
                        }
                        return(card);
                    })
                    return {cards: nextCards};
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
        this.cardComponents = this.state.cards.map(card =>
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
                {this.cardComponents.slice(0, 6)}
            </View>
            <View style={styles.board}>
                {this.cardComponents.slice(6)}
            </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    }
});

export default MemoryBoard;
