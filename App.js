import React, { Component } from 'react';
import './App.css';
import pastèque from './pastèque.gif';
import Inscription from './inscription';
import Connextion from './connexion';
import Modif_compte from './compte_modifié';



class App extends Component {
  constructor() {
    super()
    this.state = {
        nb: 0,
    }
  }
  increment_1() {
    this.setState({
        nb: this.state.nb + 1
    })
  }
  increment_2() {
    this.setState({
        nb: this.state.nb + 2
    })
  }
  increment_3() {
    this.setState({
        nb: this.state.nb + 3
    })
  }
  decrement_1() {
    this.setState({
        nb: this.state.nb - 1
    })
  }
  decrement_2() {
    this.setState({
        nb: this.state.nb - 2
    })
  }
  decrement_3() {
    this.setState({
        nb: this.state.nb - 3
    })
  }

  render() {
      return (
          <div className='App'>
            <header className='App-header'>
            <img src={pastèque} className='App-logo' alt="logo" />
              <p>{this.state.nb==0 && (<button onClick={ ( ) => this.increment_1() }>
                  bienvenue
              </button>)}</p>
              <p>{this.state.nb==1 && (<button onClick={ ( ) => this.increment_1() }>
                Créer un compte
              </button>)}</p>
              <p>{this.state.nb==1 && (<button onClick={ ( ) => this.increment_2() }>
                Compte déjà créé
              </button>)}</p>
              <p>{this.state.nb==1 && (<button onClick={ ( ) => this.increment_3() }>
                Modifier son compte
              </button>)}</p>
              <p>{this.state.nb==1 && (<button onClick={ ( ) => this.decrement_1() }>
                back
              </button>)}</p>
              <p>{this.state.nb==2 && <Inscription />}</p>
              <p>{this.state.nb==2 && (<button onClick={ ( ) => this.decrement_1() }>
                back
              </button>)}</p>
              <p>{this.state.nb==3 && <Connextion />} </p>
              <p>{this.state.nb==3 && (<button onClick={ ( ) => this.decrement_2() }>
                back
              </button>)}</p>
              <p>{this.state.nb==4 && <Modif_compte />} </p>
              <p>{this.state.nb==4 && (<button onClick={ ( ) => this.decrement_3() }>
                back
              </button>)}</p>
            </header>
          </div>
      )
  }
}

export default App;