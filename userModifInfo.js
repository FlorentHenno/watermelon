import react, {Component} from 'react';
import users from './users.js';

function modifUser(userEmail, elemToChange, whatChange) {
    for(var i = 3; i<users.length; i+=6) {
        if(userEmail == users[i]) {
            if(elemToChange == 'nom') {
                users[i-2] = whatChange;
            }
            if(elemToChange == 'prenom') {
                users[i-1] = whatChange;
            }
            if(elemToChange == 'email') {
                users[i] = whatChange;
            }
            if(elemToChange == 'motdepasse') {
                users[i+1] = whatChange;
            }
        }
    }
}
export default modifUser