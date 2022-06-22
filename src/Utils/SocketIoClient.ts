import { io, Socket } from "socket.io-client";

const socketIoClient = io("http://localhost:3000");

socketIoClient.on("connect", () => {
    console.log("socketIoClient connected to server");
    socketIoClient.emit('handshake', "HEY HEY HEY");

    console.log(socketIoClient.id);  

    socketIoClient.on("data", (data: string) =>{
        console.log("data",data);
    })

    socketIoClient.on("handshake", (data: string) =>{
        console.log("handshake",data);
    })

  });

export {
    socketIoClient
}