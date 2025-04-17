import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import MemoryAllocation from './MemoryAllocation'

// create one socket instance for the app

export default function MemorySocketWrapper() {

  const [isConnected, setIsConnected] = useState(false);

  // default to two empty panels
  const initial_columns = [{name: "lorem", hello: "hi"}, ["lol"], 4]
  const [columns, setColumns] = useState(initial_columns)
  //const [columns, setColumns] = useState([[], []])

   useEffect(() => {

    console.log("useEffect")
    const wsurl = 'ws://localhost:8080';
    const socket = io(wsurl, {
        path: "/",
        transports: ["websocket"],
        upgrade: false
    })
    function onConnect() {
        console.log("connected")
      setIsConnected(true);
    }

    function onDisconnect() {
        console.log("disconnected")
      setIsConnected(false);
    }

    function onMemoryUpdate(data){
        console.log("data recieved: ", data)

        setColumns([data,...columns])
        // validate shape if you want...
        //if (Array.isArray(data.columns) && data.columns.length === 2) {
        //setColumns(data.columns)
        //}
    }

    function onData(data){
        console.log("data received", data);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('memoryUpdate', onMemoryUpdate);
    socket.on('data', onData)

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('memoryUpdate', onMemoryUpdate);
    socket.off('data', onData)
    };
  }, []);

  //return <MemoryAllocation columns={columns} />
  return (
  <div>
    {columns.map(column =>  <p>{JSON.stringify(column)}</p>)}
</div>
  )
  }
