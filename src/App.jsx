import React from 'react'
import './App.css'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelListContainer, ChannelContainer, Auth } from './components'
const cookies = new Cookies()
const apiKey = 'nyw2qjsya83g'
const authToken = cookies.get('token')
const client = StreamChat.getInstance(apiKey)
if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    phoneNumber: cookies.get('phoneNumber'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}
const App = () => {
  if(!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
    </div>
  )
}

export default App