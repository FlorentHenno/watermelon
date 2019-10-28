import react, { Component } from 'react';
import users from './users';
import wallets from './wallets';
import transfers from './transferts';

var id = -1;

function userTransfer(debitedID, creditedID, amount) {
    id++
    var idcheck = 0;
    while(idcheck == 0) {
        for(var i = 1; i<transfers.length; i+=3) {
            idcheck = 1
            if(transfers[i] == id) {
                id++
                idcheck = 0
                break
            }
        }
    }
    transfers.push(id, debitedID, creditedID, amount)
    for(var j = 0; j<wallets.length; j+=2) {
        if(debitedID == wallets[i]) {
            wallets[i+1]-=amount
        }
    }
    for(var j = 0; j<wallets.length; j+=2) {
        if(creditedID == wallets[i]) {
            wallets[i+1]+=amount
        }
    }
}

export default userTransfer;