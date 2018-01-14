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
