import React,{useState,useEffect} from 'react'

const GarbageCollection = () => {
   const [gcEvents, setGcEvents] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/gc-events');
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setGcEvents(prevEvents => [...prevEvents, message]);
    };

    return () => ws.close();
  }, []);
  return (
        <div>
      {/* <h2>Garbage Collection</h2> */}
      {/* Visualization Code Here */}
    </div>
  )
}

export default GarbageCollection