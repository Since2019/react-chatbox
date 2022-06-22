import React, { useContext } from 'react'
import { useEffect, useState } from 'react'

import { socketIoClient } from "../Utils/SocketIoClient"
import { userContext, userContextObj } from "../Contexts/UserContext"


export default function ChatChannelNameInput() {

    // Hide Confirm Button after user confirming the
    const confirmName = () => {
        socketIoClient.emit("user-name", name);
        setNameConfirmed(true);
    }

    const setName = useContext(userContext).setName;
    const name = useContext(userContext).name;

    // const [name, setName] = useState("player" + Date.now());

    const [nameConfirmed, setNameConfirmed] = useState(false)

    useEffect(() => { console.log("name", name) }, [name])

    useEffect(() => { console.log("userContext", userContext) }, [name])
    
    return (
        <>
            <input value={name} onChange={(e) => {
                setName(e.target.value);
            }} />

            {!nameConfirmed && <button onClick={confirmName}>Confirm Channel Name</button>}
        </>
    )
}
