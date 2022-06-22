import React , {useState} from 'react'
import NameInput from "../Components/NameInput"
import { userContext } from "../Contexts/UserContext"
import MessageBox from "../Components/MessageBox"
import ChatInput from "../Components/ChatInput"

export default function PublicChatPage() {

    const [name, setName] = useState("")

    return (
        <>

        <div>Private Chat Page</div>

            <NameInput />
 


        <userContext.Consumer>
            {value =>
            (
                <>
                    <MessageBox />
                    <ChatInput name={name} />
                </>
                )
            }

        </userContext.Consumer>

    </>
    )
}
