import React, { Component } from 'react';
import Argent from './Argent';
import  Modif_carte from './carte_modifié';

class Carte extends Component {
    constructor() {
        super();
        this.state = {
            n: 0,
        }
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
    render() {
        return (
            <div>
                <button onClick={() => this.increment_1()}>Mettre une carte</button>
                <p>{this.state.n==1 && <Argent />}</p>
                <p>{this.state.n==1 && (<button onClick={ ( ) => this.decrement_1() }>
                    Back
                </button>)}</p>
                <button onClick={() => this.increment_2()}>Changer les informations de la carte</button>
                <p>{this.state.n==2 && <Modif_carte />}</p>
                <p>{this.state.n==2 && (<button onClick={ ( ) => this.decrement_2() }>
                    Back
                </button>)}</p>
               
            </div>
        );
    }
}
export default Carte