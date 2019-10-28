import React, { Component } from 'react';
import modifCard from './cardModifInfo';

class Modif_carte extends Component {

    constructor(props) {
        super(props);
        this.getCartemodif = this.getCartemodif.bind(this);
    }

    getCartemodif() {   
        var userEmail = ((document.getElementById("spEmail")||{}).value)||"";     
        var userNom = ((document.getElementById("spNom")||{}).value)||"";
        var userchangement = ((document.getElementById("change")||{}).value)||"";
        
        modifCard({userNom, userEmail, userchangement})
    }

    createUser(userNom, userEmail, userchangement) {
        modifCard(userNom, userEmail, userchangement)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Email" className="col-xs-12 col-sm-4 control-label">Le nom</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spEmail" name="email" placeholder="le nom" value={this.props.userEmail} />
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
                    <button onClick={() => this.getCartemodif()}>Modifié</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Modif_carte;