import React from 'react'
import { useEffect, useState } from 'react'

import { socketIoClient } from "../Utils/SocketIoClient"

import { NewChatMessage } from "../Types/NewChatMessage"


export default function ChatInput(props:any) {

    // Hide Confirm Button after user confirming the name.
    const sendMessage = () => {
        socketIoClient.off("chat-msg");

        // name will be provided from Context Provider
        if(props.name){
            const name = props.name
            socketIoClient.emit("public-chat-msg", JSON.stringify({ name, message }));

        }
        // socketIoClient.off("chat-msg");
    }


    // const [mName,setMName] = useState("player" + Date.now());

    const [message, setMessage] = useState("");

    useEffect(() => { console.log( props.name, "said:", message) }, [props, message])

    return (
        <>
            <h4>Enter Message Here:</h4>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </>
    )

}
