import { useEffect, useState } from 'react';
import React from 'react';

import { socketIoClient } from "../Utils/SocketIoClient"

import Message from './Message';

import { NewChatMessage } from "../Types/NewChatMessage";

export default function MessageBox(props: any) {

    // let messageArray: Array<NewChatMessage> = [];
    const [messageArray, setMessageArray] = useState(Array<NewChatMessage>)


    useEffect(() => {
        if (props.mode === "public") {
            socketIoClient.on("public-chat-msg", (msg: any) => {
                console.log("on public-chat-msg");
                const { name, message }: NewChatMessage = JSON.parse(msg);
                console.log("user:", name, "said:", message);

                if (!messageArray.includes({ name, message })) {
                    setMessageArray(oldArray => [...oldArray, { name, message }]);
                }
                socketIoClient.off("public-chat-msg");
            })
        }
        else if(props.mode ==="private") {
            socketIoClient.on("private-chat-msg", (msg: any) => {
                console.log("on private-chat-msg");
                const { name, message }: NewChatMessage = JSON.parse(msg);
                console.log("user:", name, "said:", message);

                if (!messageArray.includes({ name, message })) {
                    setMessageArray(oldArray => [...oldArray, { name, message }]);
                }
                socketIoClient.off("private-chat-msg");
            })
        }


    }, [messageArray])

    useEffect(() => {
        console.log(messageArray);

    }, [messageArray])

    return (
        <div>
            {/* Messages will be list rendered  */}
            {
                messageArray.map((messageItem, index) => {
                    return <Message key={index} name={messageItem.name} message={messageItem.message} />
                })
            }
        </div>
    )
}
