import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import messageList from './components/messageList';
import SendMessageForm from './components/SendMessageForm'

 class ChatScreen extends Component {
     constructor(){
         super()
         this.state = {
             message: []
         }
     }
     componentDidMount () {
       const chatManager = new Chatkit.ChatManager({
           instanceLocator: 'v1:us1:d5d69732-935c-4d6e-a9cb-120f36d8b060',
           userId: this.props.currentUsername,
           tokenProvider: new Chatkit.TokenProvider({
               url: 'http://localhost:3001/authenticate'
           })
       })

       chatManager
       .connect()
       .then(currentUser => {
          return currentUser.subscribeToRoom({
               roomId:  11408625,
               messageLimit: 100,
               hooks: {
                  onNewmessage: message => {
                      this.setState({
                          message: [...this.state.messages, message]
                      })
                  } 
               }
           })
       })
       .then(currentRoom => {})
       .catch(error => console.error(error))
     }
  render() {
    return (
      <div>
       <h1> ChatScreen</h1>
       <messageList messages={this.state.messages}/>
       <SendMessageForm onSubmit={text => alert(text)} />
      </div>
    )
  }
}

export default ChatScreen;