import React, { useEffect, useState,useRef} from 'react';

import { Player } from '@lordicon/react';

// const ICON = require('./assets/lock.json');
// const playerRef = useRef<Player>(null);

  

const MemoryAllocation = ({ columns = [[],[]] }) => {
    const [memoryData, setMemoryData] = useState(null);
// const playerRef = useRef(null);
//   useEffect(() => {
//      playerRef.current?.playFromBeginning();
//     fetch('http://localhost:8000/memory')
//       .then(response => response.json())
//       .then(data => setMemoryData(data))
//       .catch(error => console.error('Error fetching memory data:', error));
//   }, []);
  return (
//         <div>
//       {memoryData ? <p>Heap Size: {memoryData.heapSize}</p> :  <lord-icon
//     src="https://cdn.lordicon.com/jpgpblwn.json"
//     trigger="loop"
//     delay="100"
//     style={{width:"200px",height:"200px"}}>
// </lord-icon>}
//     </div>
 <div className="border border-black w-96 p-4 h-full flex flex-col">
      {/* Title */}
      {/* <p className="mb-4 text-black font-bold">Memory</p> */}

      {/* Two vertical panels side by side */}
      <div className="flex flex-1 space-x-4">
        {columns.map((boxes, colIdx) => (
          <div key={colIdx} className="flex flex-col border border-black flex-1 p-2">
            {/* Big empty space */}
            <div className="flex-1" />

            {/* Bottom two small boxes */}
            <div className="flex space-x-2 mt-2">
              {boxes.map((box, idx) => (
                <div
                  key={box.id ?? idx}
                  className="border border-black flex-1 h-20 flex items-center justify-center"
                >
                  <p className="text-black">{box.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryAllocation