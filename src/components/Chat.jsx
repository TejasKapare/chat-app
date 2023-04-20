import React, { useContext } from 'react'
import cam from '../img/camera.png'
import people from '../img/addmore.png'
import more from '../img/more.png'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../Context/ChatContext'


const Chat = () => {

    const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src={cam} alt="" />
                <img src={people} alt="" />
                <img src={more} alt="" />
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat