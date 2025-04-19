import React from 'react'

const operandToString = (operand) => {
  const [type, rawValue] = Object.entries(operand)[0]
const value = type == "Ref" || type == "Reference" ? rawValue.replace("Object Id: ", ""): rawValue;
return `${type == "Reference" ? "Ref" : type}: ${value}`
}

function Frame({name, pc}){
return }

const StackVisualization = ({currFrame, stackFrames}) => {
return (<>
<div>
</div>
</>)
}
const StackVisualizationn = ({currFrame, stackFrames}) => {
const pc = currFrame.pc
const operands = currFrame.operands
const locals = currFrame.locals
  return (
   <div className="border-[3px] border-black p-4 flex flex-col w-[24vw] mt-10 h-full">
      {/* Top row: PC and Name */}
      <div className="flex mb-2">
        <div className="flex-1 border-2 border-black p-2 text-center">
          <p className="font-bold text-xl">PC</p>
          <p className="font-normal">{pc}</p>
        </div>
        <div className="flex-1 border-2 border-black p-2 text-center">
          <p className="font-bold text-xl">Name</p>
          <p className="font-normal">{currFrame.name}</p>
        </div>
      </div>
<br/>
      {/* Bottom row: Stack/Operands and Locals */}
      <div className="flex flex-1">
        <div className="flex-1 border-2 border-black p-2 text-center flex flex-col bg-lime-50 bg-opacity-90">
          <p className="font-bold mb-2 text-xl">Stack/Operands</p>
          <div className="flex-1 overflow-y-auto divide-y divide-black">
            {operands.length > 0 && operands.map((operand, idx) => (
              <div key={idx} className="py-2">
                <p className="font-normal">{operandToString(operand)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 border-2 border-black p-2 text-center flex flex-col ml-2 bg-red-100 bg-opacity-90">
          <p className="font-bold text-xl mb-2">Locals</p>
          <div className="flex-1 overflow-y-auto divide-y divide-black">
            {locals.length > 0 && locals.map((local, idx) => (
              <div key={idx} className="py-2">
                <p className="font-normal">{operandToString(local)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* rest frames */}
        <div className ="flex flex-1">
            {stackFrames.map(frame => <>
                <Frame frame = {frame}/>
            </>)}
        </div>

    </div>
  )
}

export default StackVisualization
