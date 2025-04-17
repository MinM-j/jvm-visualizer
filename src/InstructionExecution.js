import React from 'react'

const InstructionExecution = () => {
  return (
         <div className="border border-black p-4 h-[70vh] flex flex-col">
      {/* Title */}
      {/* <p className="mb-2 text-black font-bold">Instructions</p> */}

      {/* Top Box (e.g., 'cei') */}
      <div className="border border-black flex-1 flex items-center justify-center mb-2">
        <p className="text-black">cei</p>
      </div>

      {/* Bottom Box (e.g., 'ch') */}
      <div className="border border-black flex-1 flex items-center justify-center">
        <p className="text-black">ch</p>
      </div>
    </div>
  )
}

export default InstructionExecution