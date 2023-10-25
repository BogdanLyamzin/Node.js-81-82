import {Server} from "socket.io";
import {createServer} from "http";

const httpServer = createServer();

const wsServer = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

wsServer.on("connection", (socket)=> {
    socket.on("chat-message", data => {
        socket.broadcast.emit("chat-message", data);
    })
})

httpServer.listen(4000);