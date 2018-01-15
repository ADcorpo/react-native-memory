/**
 * generateCards()
 * 
 * Returns a deck of initialized cards in random order.
 * 
 * Cards inside the game state are simply plain JavaScript
 * objects defined by an id (int, re-used through the entire 
 * game to identify the card, is simply the card's position in
 * the cards array), a color (string, HTML color) and two
 * booleans indicating if the card is flipped and/or was paired
 * with the other card of same color.
 * 
 * The default stade for a card is to be facing down (hidden) and
 * not paired with another card.
 */

function generateCards() {
    const colors = [
        "orange",
        "red",
        "yellow",
        "purple",
        "green",
        "blue"
    ];

    let cardColors = colors.concat(colors);

    // Sad and dirty way of randomizing an Array
    cardColors.sort(
        () => {
            return(0.5 - Math.random());
        }
    );

    let deck = cardColors.map((color, id) => {
        return({color: color, id: id, paired: false, hidden: true});
    });
    
    return(deck);
}

export default generateCards;
