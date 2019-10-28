import react, { Component } from 'react';
import cards from './cards';

function modifCard(cardID, elemToChange, whatChange) {
    for(var i = 0; i<cards.length; i+=5) {
        if(cardID == cards[i]) {
            if(elemToChange == 'last4') {
                cards[i+1] = whatChange;
            }
            if(elemToChange == 'brand') {
                cards[i+2] = whatChange;
            }
            if(elemToChange == 'expdate') {
                cards[i+3] = whatChange;
            }
            if(elemToChange == 'userid') {
                cards[i+4] = whatChange;
            }
        }
    }
}
export default modifCard