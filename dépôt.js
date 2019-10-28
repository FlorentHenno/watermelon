import React, { Component } from 'react';
import userPayout from './userPayout';

class Dépôt extends Component {

    constructor(props) {
        super(props);
        this.getDepot = this.getDepot.bind(this);
    }

    getDepot() {        
        var userQuantité = ((document.getElementById("Depot")||{}).value)||"";
        userPayout({userQuantité})
    }

    createRetrait(userQuantité) {
        userPayout(userQuantité)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Nom" className="col-xs-12 col-sm-4 control-label">Quantité de dépôt</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="Depot" name="dépôt" placeholder="dépôt" value={this.props.userQuantité}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={() => this.getDepot()}>Mettre de l'argent</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Dépôt;