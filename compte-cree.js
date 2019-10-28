import React, { Component } from 'react';

class Compte_cree extends Component {
    render() {
        return (
            <div>
                <div class="display"></div>
                 <div>
                    <div label='E-mail'>E-mail :</div>
                    <input type="text" name="enterEmail"/>
                    <div label='Password'>Password :</div>
                    <input type="text" name="enterPassword"/>
                    <button onCLick={this.createAccount}>
                        Valider
                    </button>
                </div>
            </div>
        );
    }
}

export default Compte_cree;