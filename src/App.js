import React, { Component } from 'react';
import './App.css';
import Message from './components/Message'
import Formulaire from './components/Formulaire'

class App extends Component {
  state = {
    messages : {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({ messages : messages })
  }
  
  render () {
    const messages = Object.keys(this.state.messages).map( key => (
      <Message
        key={key}
        pseudo={this.state.messages[key].pseudo}
        message={this.state.messages[key].message}
      />
    ))


    return (
      <div className="box">
        <div>
          <div className="messages">
            {messages}
          </div>
        </div>
        <Formulaire 
        pseudo={this.state.pseudo}
        length={140}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}


export default App;
