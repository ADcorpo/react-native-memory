/**
 * A card in a Memory game.
 *
 * Used to display cards according to game state.
 * 
 * Props:
 * - onFlip: callback, called when the user wants to flip a Card
 * - paired: boolean, true if the card was paired, else false
 * - hidden: boolean, true if the card is facing down, else false
 * - color: string, the card's color - has to be a valid HTML color
 * - id: int, the card's identifier. Should be unique. Not used for 
 *       critical purposes inside the Card class.
 */

import React, { Component } from "React";
import { TouchableHighlight, Text, StyleSheet } from "react-native";


class Card extends Component {
    constructor(props){
        super(props);
    }
    
    flip = () => {
        if (!this.props.paired) {
            this.props.onFlip(this.props.id);
        }
    }

    getColor = () => {
        if (this.props.paired)
        {
            return("white");
        }
        if (this.props.hidden)
        {
            return("grey");
        }
        return this.props.color;
    }
    
    render() {
        return(
            <TouchableHighlight onPress={this.flip} style={[styles.card, {backgroundColor: this.getColor()}]}>
                <Text>
                {this.props.id + 1}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 50,
        height: 75,
        margin: 3
    }
});

export default Card
