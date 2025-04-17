import React, { useEffect, useState,useRef} from 'react';

import { Player } from '@lordicon/react';

// const ICON = require('./assets/lock.json');
// const playerRef = useRef<Player>(null);

  

//const MemoryAllocation = ({ columns = [[],[]] }) => {
//  return (
// <div className="border border-black w-96 p-4 h-full flex flex-col">
//      {/* Title */}
//      {/* <p className="mb-4 text-black font-bold">Memory</p> */}
//
//      {/* Two vertical panels side by side */}
//      <div className="flex flex-1 space-x-4">
//        {columns.map((boxes, colIdx) => (
//          <div key={colIdx} className="flex flex-col border border-black flex-1 p-2">
//            {/* Big empty space */}
//            <div className="flex-1" />
//
//            {/* Bottom two small boxes */}
//            <div className="flex space-x-2 mt-2">
//              {boxes.map((box, idx) => (
//                <div
//                  key={box.id ?? idx}
//                  className="border border-black flex-1 h-20 flex items-center justify-center"
//                >
//                  <p className="text-black">{box.content}</p>
//                </div>
//              ))}
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>
//  )
//}
//
const MemoryAllocation = ({memory, memorySize}) => {
    const {young, old} = memory
    return (<>
        <div class = "flex flex-col">
            <p> young </p>
            { young.length > 0 && young.map(el => <p>{el}</p>)}
            <p> old </p>
            { old.length > 0 && old.map(el => <p>{el}</p>)}
        </div>
    </>)
}
export default MemoryAllocation
