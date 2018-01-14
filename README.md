# Memory game made with React Native

This is a simple memory game made with React Native.  Since this is
mainly made as an exercise, here are some things I could do to enhance
it in the future:

- Make the amount of cards in a game parametrizable
- Make playing again w/o closing the app possible

# Architecture

This is made out of two components. Card is simply made to display
card information. The actual state of the game resides in MemoryBoard.

I am still tinkering with React so please do not hesitate to open an
issue if I made a mistake (for example I think I could move card
component generation elsewhere, generating childrens at render seems
suboptimal).

## Helpers

There is currently only one helper. The purpose of helper is to
provide functionnality in an ergonomic way outside of the UI logic.

### generateCards()

This helpers provides a randomized deck of cards, which are
represented as a plain JavaScript object with attributes relevant to
the game.