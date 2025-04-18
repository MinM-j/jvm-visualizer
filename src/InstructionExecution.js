import React from 'react'

const InstructionExecution = ({cei, instructions, pc}) => {
  return (
         <div className="border border-black p-4 h-[70vh] flex flex-col">
      {/* Title */}
      {/* <p className="mb-2 text-black font-bold">Instructions</p> */}

      {/* Top Box (e.g., 'cei') */}
      <div className="border border-black flex-1 flex items-center justify-center mb-2 flex-col">
          <p className="text-black">CEI</p>
          {cei && <p>{cei}</p>}
      </div>

      {/* Bottom Box (e.g., 'ch') */}
      <div className="border border-black flex-1 flex items-center justify-center flex-col">
        <p className="text-black">instructions</p>
<div>
        {instructions.length > 0 && instructions.slice(pc, pc+10).map((instruction, i, _) => <>
        <p>{pc+i}: {instruction} </p>
        </>)}
</div>
      </div>
    </div>
  )
}

export default InstructionExecution
