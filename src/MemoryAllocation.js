import React, { useEffect, useState,useRef} from 'react';

import { Player } from '@lordicon/react';

// const ICON = require('./assets/lock.json');
import ICON from './assets/lock.json';
// const playerRef = useRef<Player>(null);

  
 
const MemoryAllocation = () => {
    const [memoryData, setMemoryData] = useState(null);
const playerRef = useRef(null);
  useEffect(() => {
     playerRef.current?.playFromBeginning();
    fetch('http://localhost:8000/memory')
      .then(response => response.json())
      .then(data => setMemoryData(data))
      .catch(error => console.error('Error fetching memory data:', error));
  }, []);
  return (
        <div>
      {/* <h2>Memory Allocation</h2> */}
      {/* {memoryData ? <p>Heap Size: {memoryData.heapSize}</p> : <p>Loading...</p>} */}
      {memoryData ? <p>Heap Size: {memoryData.heapSize}</p> :  <lord-icon
    src="https://cdn.lordicon.com/jpgpblwn.json"
    trigger="loop"
    delay="1000"
    style={{width:"200px",height:"200px"}}>
</lord-icon>}
    </div>
  )
}

export default MemoryAllocation