import React, { Component } from 'react';
import addUser from './userConst';

class Inscription extends Component {

    constructor(props) {
        super(props);
        this.getInfos = this.getInfos.bind(this);
    }

    getInfos() {        
        var userNom = ((document.getElementById("spNom")||{}).value)||"";
        var userPrenom = ((document.getElementById("spPrenom")||{}).value)||"";
        var userEmail = ((document.getElementById("spEmail")||{}).value)||"";
        var userMdP = ((document.getElementById("spMdP")||{}).value)||"";
        addUser({userNom, userPrenom, userEmail, userMdP})
    }

    createUser(userNom, userPrenom, userEmail, userMdP) {
        addUser(userNom, userPrenom, userEmail, userMdP)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Nom" className="col-xs-12 col-sm-4 control-label">Nom</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spNom" name="nom" placeholder="Votre nom" value={this.props.userNom}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Prenom" className="col-xs-12 col-sm-4 control-label">Prénom</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spPrenom" name="prenom" placeholder="Votre prénom" value={this.props.userPrenom}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Email" className="col-xs-12 col-sm-4 control-label">Email</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spEmail" name="email" placeholder="Votre adresse mail" value={this.props.userEmail} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="MotDePasse" className="col-xs-12 col-sm-12 control-label">Mot de passe</label>
                    <div className="col-xs-12 col-sm-12">
                    <input type="password" className="form-control" id="spMdP" name="motdepasse" placeholder="Votre mot de passe" value={this.props.userMdP}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={() => this.getInfos()}>Créer le compte</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Inscription;