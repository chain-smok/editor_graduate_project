import React from "react"


import ReactWindow from 'reactjs-windows'
import 'reactjs-windows/dist/index.css'
import { ChatEngine } from 'react-chat-engine';

const SupportWindow = props => {
    
    return (
        <div 
            style={{
         
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
         <ReactWindow title="Test Window">
         <ChatEngine
            publicKey='a748d221-bd2b-47b1-af6f-cb81b602b088'
            userName='adam'
            userPassword='pass1234'
        />
           </ReactWindow>

        </div>
    )
}

export default SupportWindow;
