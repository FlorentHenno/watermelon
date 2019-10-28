import react, { Component } from 'react';
import users from './users.js';
import cards from './cards';

var id = -1;

function addCard(cardLastfour, cardBrand, cardExpdate, userID) {
    id++
    var idcheck = 0;
    while(idcheck == 0) {
        for(var i = 0; i<cards.length; i+=5) {
            idcheck = 1
            if(cards[i] == id) {
                id++
                idcheck = 0
                break
            }
        }
    }
    cards.push(id, cardLastfour, cardBrand, cardExpdate, userID)
}

export default addCard