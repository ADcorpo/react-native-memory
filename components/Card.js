/**
 *  A card in a Memory game.
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
