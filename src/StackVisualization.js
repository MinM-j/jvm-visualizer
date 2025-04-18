import React from 'react'

const operandToString = (operand) => {
  const [type, rawValue] = Object.entries(operand)[0]
const value = type == "Ref" ? rawValue.replace("Object Id: ", ""): rawValue;
  if(type == "Ref"){
  }
return `${type}: ${value}`
}

const StackVisualization = ({currFrame}) => {
const pc = currFrame.pc
const operands = currFrame.operands
const locals = currFrame.locals
console.log({operands, locals})
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
{locals.length > 0 && locals.map(local => <p>
{operandToString(locals)}
</p>
)}
        </div>
        <div className="border border-black p-2 m-1 flex-1 text-center">
          <p className="text-black">Operands</p>
{operands.length > 0 && operands.map(operand => 
<p>
{operandToString(operand)}
</p>
)}
        </div>
      </div>
    </div>
  )
}

export default StackVisualization
