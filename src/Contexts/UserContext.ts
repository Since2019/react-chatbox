import { createContext } from 'react';


const userContextObj = {
    name: "",
    setName: (name: string) => {
        userContextObj.name = name;
    }
}

const userContext = createContext(userContextObj);

 
 

export { userContext , userContextObj};