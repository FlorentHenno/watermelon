import react, { Component } from 'react';
import users from './users';

var id = -1

function addUser(userNom, userPrenom, userEmail, userMdP) {
    id++
    var idcheck = 0;
    while(idcheck == 0) {
        for(var i = 0; i<users.length; i+=6) {
            idcheck = 1
            if(users[i] == id) {
                id++
                idcheck = 0
                break
            }
        }
    }
    users.push(id, userNom, userPrenom, userEmail, userMdP, 0);
}

export default addUser;