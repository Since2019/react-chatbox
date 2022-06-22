import React from 'react'

import {NewChatMessage} from "../Types/NewChatMessage"

export default function Message({ name, message } :NewChatMessage) {
    return (
        <div>
            <span style={{ color:"red"}}>{name}:</span>
            <span>{message}</span>
        </div>
    )
}
