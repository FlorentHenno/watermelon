import React, { Component } from 'react';
import addCard from './addCard';


class Argent extends Component {

    constructor(props) {
        super(props);
        this.getCarte = this.getCarte.bind(this);
    }

    getCarte() {        
        var userCarte = ((document.getElementById("codeCarte")||{}).value)||"";
        var userCode = ((document.getElementById("code")||{}).value)||"";
        var userDate = ((document.getElementById("date")||{}).value)||"";
        var userID = ((document.getElementById("idUser")||{}).value)||"";
        addCard({userCarte,userCode,userDate,userID})
    }
    
    createCarte(userCarte, userCode, userDate, userID) {
        addCard(userCarte, userCode, userDate, userID)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="carte" className="carte créer control-label">les 4 derniers chiffres</label>
                    <div className="carte crée">
                    <input className="form-control" id="codeCarte" name="carte" placeholder="4 derniers chiffres" value={this.props.userCarte} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="codesecret" className="code secret control-label">type de carte</label>
                    <div className="col-xs-12 col-sm-12">
                    <input type="password" className="code_secret" id="code" name="codeSecret" placeholder="Le type de carte" value={this.props.userCode}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="datelimite" className="date limite control-label">date limite</label>
                    <div className="col-xs-12 col-sm-13">
                    <input className="date_limite" id="date" name="datefin" placeholder="La date d'expiration" value={this.props.userDate}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="datelimite" className="userID control-label">Le nom</label>
                    <div className="col-xs-13 col-sm-13">
                    <input className="user_id" id="idUser" name="usersid" placeholder="le nom" value={this.props.userID}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-5 col-sm-4">
                    <button onClick={() => this.getCarte()}>Ajouter la Carte</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Argent;

