import React, { Component, createRef } from 'react';
import './App.css';
import './animations.css'
import Message from './components/Message'
import Formulaire from './components/Formulaire'

//firebase
import base from './base'

//animations
import{
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages : {},
    pseudo: this.props.match.params.pseudo
  }

  messageRef = createRef()

  componentDidMount() {
    base.syncState('/',{
      context : this,
      state : 'messages'
    })
  }

  componentDidUpdate() {
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    Object.keys(messages).slice(0,-10).forEach(key =>{
      messages[key] = null
    })
    this.setState({ messages : messages })
  }
  
  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object.keys(this.state.messages).map( key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}
      >
        <Message
          isUser={this.isUser}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
        />
      </CSSTransition>
    ))


    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messageRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
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
