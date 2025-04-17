import React from 'react'

const StackVisualization = () => {
  return (
     <div className="border border-black p-4 h-full flex flex-col">
      {/* Title */}
      {/* <p className="mb-2 text-black font-bold">Stack</p> */}

      {/* Large top area (empty in the diagram) */}
      {/* <div className="border border-black flex-1 mb-2"></div> */}

      {/* Bottom boxes */}
      <div className="flex flex-wrap mt-auto">
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Name</p>
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">PC</p>
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Locals</p>
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Operands</p>
        </div>
      </div>
    </div>
  )
}

export default StackVisualization