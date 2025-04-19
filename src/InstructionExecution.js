import React from 'react'

const InstructionExecution = ({cei, instructions, pc}) => {
  return (
//          <div className="border-4 border-black p-4 h-[70vh] flex flex-col w-[22vw] mt-10">
//       <div className="border-2 border-black flex-1 flex items-center justify-center mb-2 flex-col">
//           <p className="text-black">CEI</p>
//           {cei && <p>{cei}</p>}
//       </div>

    
//       <div className="border-2 border-black flex-1 flex items-center justify-center flex-col">
//         <p className="text-black">instructions</p>
// <div>
//         {instructions.length > 0 && instructions.slice(pc, pc+10).map((instruction, i, _) => <>
//         <p>{pc+i}: {instruction} </p>
//         </>)}
// </div>
//       </div>
//     </div>

     <div className="border-[3px] border-black p-4 flex flex-col w-[22vw] mt-10">
      {/* CEI Box */}
      <div className="border-2 border-black mb-2 p-2 flex-none">
        <p className="text-black text-xl font-bold">CEI:</p>
        <p className="text-black font-normal">{cei && <p>{cei}</p>}</p>
      </div>

      {/* Instructions Box */}
      <div className="border-2 border-black flex-1 flex flex-col p-2 bg-lime-50 bg-opacity-90">
        <p className="text-black text-xl font-bold mb-2">Instructions:</p>
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-black">
             {instructions.length > 0 && instructions.slice(pc, pc+10).map((instruction, i, _) => <>
        <p className="py-2">{pc+i}: {instruction} </p>
        </>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionExecution
