import React, { useEffect, useState,useRef} from 'react';


// const ICON = require('./assets/lock.json');
// const playerRef = useRef<Player>(null);

  

const MemoryAllocation = ({memory, memorySize}) => {
    const {young, old} = memory
console.log({young, old})
return (
//       <>
//         <div class = "flex flex-col h-full">
//             <div class="h-1/2 bg-red-200">
//             <p> Young </p>
//           <div>
//             { young.length > 0 && young.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
//           </div>
//         </div>

//         <div class="h-1/2 bg-blue-200">
//           <p> Old </p>
//           <div>
//             { old.length > 0 && old.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
//           </div>
//           </div>
//         </div>
// </>
 <div className="border-[3px] border-black flex flex-col min-h-80 w-[36vw] mt-10">
      {/* Title */}
      {/* <div className="border-b-2 border-black p-2">
        <p className="text-center font-bold">Memory</p>
      </div> */}

      {/* Young Generation Section */}
      <div className="flex-1 border-b-2 border-black p-2 overflow-y-auto bg-lime-50 bg-opacity-60">
        <p className="font-bold mb-2 text-xl text-left pl-6 pt-1">Young:</p>
        <div className="space-y-1">
        { young.length > 0 && young.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
        </div>
      </div>

       {/* Old Generation Section */}
      <div className="flex-1 p-2 overflow-y-auto bg-red-100 bg-opacity-60">
        <p className="font-bold mb-2 text-xl text-left pl-6 pt-1">Old:</p>
        <div className="space-y-1">
        { old.length > 0 && old.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
        </div>
      </div>
    </div>
)
}

export default MemoryAllocation
