import React, { Component } from 'react';

class Chat extends Component {
    render() {
        return (
            <div>
                <div class="display"></div>
                 <div>
                    <div label='Nom'>Nom :</div>
                    <input type="text" name="enterName"/>
                    <div label='Prénom'>Prénom :</div>
                    <input type="text" name="enterSurname"/> 
                    <div label='E-mail'>E-mail :</div>
                    <input type="text" name="enterEmail"/>
                    <div label='Password'>Password :</div>
                    <input type="text" name="enterPassword"/>
                    <div label='confirm-your-Password'>Confirm your password :</div>
                    <input type="text" name="enterPassword"/>
                    <button onCLick={this.createAccount}>
                        Créer votre compte
                    </button>
                </div>
            </div>
        );
    }
}

export default Chat;