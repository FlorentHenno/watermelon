import React, {Component} from 'react';
import users from './users'

var isInDatabase = 0 

function findUser(userEmail, userMdP) {
    for(var i = 3; i < users.length; i+=6) {

        if(users[i]==userEmail)
        {
            isInDatabase = 1;
            if(users[i+1] == userMdP) {
                return("True")
            }
            else {
                return("False")
            }
        }
    }
    if(isInDatabase == 0) {
        return("True")
    }
}

export default findUser;