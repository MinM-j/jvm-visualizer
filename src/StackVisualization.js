import React from 'react'

const StackVisualization = ({currFrame}) => {
const pc = currFrame.pc
const operands = currFrame.operands
console.log(operands)
  return (
     <div className="border border-black p-4 h-full flex flex-col">
      {/* Title */}
      {/* <p className="mb-2 text-black font-bold">Stack</p> */}

      {/* Large top area (empty in the diagram) */}
      {/* <div className="border border-black flex-1 mb-2"></div> */}

      {/* Bottom boxes */}
      <div className="flex flex-wrap mt-auto flex-col">
<div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Name</p>
          <p>{currFrame.name} </p>
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">PC</p>
<p> {pc}</p>
        </div>
</div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Locals</p>
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Operands</p>
{operands.length > 0 && operands.map(operand => <p>
{JSON.stringify(operand)}
</p>
)}
        </div>
      </div>
    </div>
  )
}

export default StackVisualization
