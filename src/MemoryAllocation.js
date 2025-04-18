import React, { useEffect, useState,useRef} from 'react';

import { Player } from '@lordicon/react';

// const ICON = require('./assets/lock.json');
// const playerRef = useRef<Player>(null);

  

const MemoryAllocation = ({memory, memorySize}) => {
    const {young, old} = memory
console.log({young, old})
return (<>
        <div class = "flex flex-col h-full">
            <div class="h-1/2 bg-red-200">
            <p> Young </p>
          <div>
            { young.length > 0 && young.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
          </div>
        </div>

        <div class="h-1/2 bg-blue-200">
          <p> Old </p>
          <div>
            { old.length > 0 && old.map(([ref, obj_type]) => <p>{ref}: {obj_type}</p>)}
          </div>
          </div>
        </div>
</>)
}

export default MemoryAllocation
