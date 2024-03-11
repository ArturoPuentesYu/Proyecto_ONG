import { useEffect } from "react";


const webSocket = () => {

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:3001")
        ws.onopen = () => {
            ws.send("Victor conectado");
        }
        ws.onmessage = (mensaje) => {
            console.log("Mensaje recibido: " + mensaje.data);
        }
        ws.onerror = (error) => {
            console.log("Error: " + error);
        }
        ws.onclose = () => {
            console.log("Desconectado");
        }
        return () => {ws.close()}
    }, [])

    return(<>
        <h1>Websocket</h1>
    </>);
}

export default webSocket;