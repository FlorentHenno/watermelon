import React, { Component } from 'react';
import findUser from './userFind';

import Retrait from './retrait'
import Dépôt from './dépôt'
import Transfert from './transfert_dargent'
import Carte from './carte';
import { nbind } from 'q';

class Connexion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            n: 0,
        }

        this.getProfile = this.getProfile.bind(this);
    }
    increment_1() {
        this.setState({
            n: this.state.n + 1
        })
      }
      increment_2() {
        this.setState({
            n: this.state.n + 2
        })
      }
      increment_3() {
        this.setState({
            n: this.state.n + 3
        })
      }
      increment_4() {
        this.setState({
            n: this.state.n + 4
        })
      }

      decrement_1() {
        this.setState({
            n: this.state.n - 1
        })
      }
      decrement_2() {
        this.setState({
            n: this.state.n - 2
        })
      }
      decrement_3() {
        this.setState({
            n: this.state.n - 3
        })
      }
      decrement_4() {
        this.setState({
            n: this.state.n - 4
        })
      }
    getProfile() {        
        var userEmail = ((document.getElementById("spEmail")||{}).value)||"";
        var userMdP = ((document.getElementById("spMdP")||{}).value)||"";
        return(findUser(userEmail, userMdP));
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
                    <label htmlFor="MotDePasse" className="col-xs-12 col-sm-12 control-label">Mot de passe</label>
                    <div className="col-xs-12 col-sm-12">
                    <input type="password" className="form-control" id="spMdP" name="motdepasse" placeholder="Votre mot de passe" value={this.props.userMdP}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                    <button onClick={ ( ) => this.getProfile() }>Connexion</button>
                    <p>{(this.getProfile()=="True" && this.state.n==0) && 
                    <button onClick={ ( ) => this.increment_1() }>
                    Ajouter une carte de payment
                    </button>
                     }
                     </p>
                     <p>{(this.getProfile()=="True" && this.state.n==0) && 
                    <button onClick={ ( ) => this.increment_2() }>
                    Transfert
                    </button>
                     }
                     </p>
                     <p>{(this.getProfile()=="True" && this.state.n==0) && 
                    <button onClick={ ( ) => this.increment_3() }>
                    Retrait
                    </button>
                     }
                     </p>
                     <p>{(this.getProfile()=="True" && this.state.n==0) && 
                    <button onClick={ ( ) => this.increment_4() }>
                    Dépôt
                    </button>
                     }
                     </p>
                    <p>{this.state.n==1 && <Carte />}</p>
                    <p>{this.state.n==2 && <Transfert />}</p>
                    <p>{this.state.n==3 && <Retrait />}</p>
                    <p>{this.state.n==4 && <Dépôt />}</p>

                    <p>{this.state.n==1 && (<button onClick={ ( ) => this.decrement_1() }>
                    Back
                    </button>)}</p>
                    <p>{this.state.n==2 && (<button onClick={ ( ) => this.decrement_2() }>
                    Back
                    </button>)}</p>
                    <p>{this.state.n==3 && (<button onClick={ ( ) => this.decrement_3() }>
                    Back
                    </button>)}</p>
                    <p>{this.state.n==4 && (<button onClick={ ( ) => this.decrement_4() }>
                    Back
                    </button>)}</p>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </div>
        );
    }
}

export default Connexion;

