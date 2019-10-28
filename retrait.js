import React, { Component } from 'react';
import userPayin from './userPayin';

class Retrait extends Component {

    constructor(props) {
        super(props);
        this.getRetrait = this.getRetrait.bind(this);
    }

    getRetrait() {        
        var userQuantité = ((document.getElementById("Retrait")||{}).value)||"";
        userPayin({userQuantité})
    }

    createRetrait(userQuantité) {
        userPayin(userQuantité)
    }

    render() {
        return (
            <div className='sp-login-form'>
            <div className="row">
            <div className="col-xs-12">
                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="Nom" className="col-xs-12 col-sm-4 control-label">Quantité de retrait</label>
                    <div className="col-xs-8 col-sm-12">
                    <input className="form-control" id="Retrait" name="retrait" placeholder="retrait" value={this.props.userQuantité}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={() => this.getRetrait()}>Retirer l'argent</button>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Retrait;