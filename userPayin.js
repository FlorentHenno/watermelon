import react, { Component } from 'react';
import users from './users.js';
import wallets from './wallets';
import payins from './payin';

var id = -1;

function userPayin(userID, walletID, amount) {
    id++
    var idcheck = 0;
    while(idcheck == 0) {
        for(var i = 1; i<payins.length; i+=3) {
            idcheck = 1
            if(payins[i] == id) {
                id++
                idcheck = 0
                break
            }
        }
    }
    payins.push(userID, id, amount)
    for(var j = 0; j<wallets.length; j+=2) {
        if(walletID == wallets[i]) {
            wallets[i+1]+=amount
        }
    }
}

export default userPayin;