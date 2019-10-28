import react, { Component } from 'react';
import users from './users';
import wallets from './wallets';
import payouts from './payout';

var id = -1;

function userPayout(userID, walletID, amount) {
    id++
    var idcheck = 0;
    while(idcheck == 0) {
        for(var i = 1; i<payouts.length; i+=3) {
            idcheck = 1
            if(payouts[i] == id) {
                id++
                idcheck = 0
                break
            }
        }
    }
    payouts.push(userID, id, amount)
    for(var j = 0; j<wallets.length; j+=2) {
        if(walletID == wallets[i]) {
            wallets[i+1]-=amount
        }
    }
}

export default userPayout;