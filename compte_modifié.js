import React, { Component } from 'react';
import modifUser from './userModifInfo';

class Modif_compte extends Component {

    constructor(props) {
        super(props);
        this.getComptemodif = this.getComptemodif.bind(this);
    }

    getComptemodif() {   
        var userEmail = ((document.getElementById("spEmail")||{}).value)||"";     
        var userNom = ((document.getElementById("spNom")||{}).value)||"";
        var userchangement = ((document.getElementById("change")||{}).value)||"";
        
        modifUser({userNom, userEmail, userchangement})
    }

    createUser(userNom, userEmail, userchangement) {
        modifUser(userNom, userEmail, userchangement)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Email" className="col-xs-12 col-sm-4 control-label">Email</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spEmail" name="email" placeholder="Votre adresse mail" value={this.props.userEmail} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Nom" className="col-xs-12 col-sm-4 control-label">La catégorie</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spNom" name="nom" placeholder="Le nom" value={this.props.userNom}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Prenom" className="col-xs-12 col-sm-4 control-label">Ce que tu veux changer</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="change" name="changement" placeholder="changement" value={this.props.userchangement}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={() => this.getComptemodif()}>Modifié</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Modif_compte;