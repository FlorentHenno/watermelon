import React, { Component } from 'react';
import userTransfert from './userTransfert';

class Transfert extends Component {

    constructor(props) {
        super(props);
        this.getTransfert = this.getTransfert.bind(this);
    }

    getTransfert() {        
        var userNom = ((document.getElementById("spNom")||{}).value)||"";
        var userPrenom = ((document.getElementById("spPrenom")||{}).value)||"";
        var userQuantité = ((document.getElementById("spQuantité")||{}).value)||"";
        userTransfert({userNom, userPrenom, userQuantité})
    }

    createUser(userNom, userPrenom, userQuantité) {
        userTransfert(userNom, userPrenom, userQuantité)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Nom" className="col-xs-12 col-sm-4 control-label">Le nom du donneur</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spNom" name="nom" placeholder="Le nom du donneur" value={this.props.userNom}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Prenom" className="col-xs-12 col-sm-4 control-label">Le nom du receveur</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spPrenom" name="prenom" placeholder="Le nom du receveur" value={this.props.userPrenom}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Email" className="col-xs-12 col-sm-4 control-label">La quantité donnée</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="spQuantité" name="quantité" placeholder="La quantité donnée" value={this.props.userQuantité} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={() => this.getTransfert()}>Faire le transfert</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Transfert;