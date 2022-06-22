import React, { useState } from 'react'


import { NewChatMessage } from "../Types/NewChatMessage"




import styled from 'styled-components'


// Styled Components
const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: blue;
`;

export default function DefaultChatPage() {





    const handlePrivateChatClicked = ()=>{
        
    }

    const handlePublicChatClicked = ()=>{
        
    }


    return (

        <>
            <h2>PrivateChatPage</h2>
            <Button onClick={handlePrivateChatClicked}>Go to private Room</Button>
            <Button onClick={handlePublicChatClicked}>Go to public Room</Button>

        </>

    )
}
