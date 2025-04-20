import React from "react";

export default function StateVisualizer({ stackFrames, currFrame }) {
  const { locals, operands, code, pc } = currFrame;

  return (
    <div className="border rounded-lg w-full  flex flex-col text-sm overflow-hidden h-full">
      {/* CEI Label */}
      <div className="text-center border-b py-1 font-medium cei-text">{code[pc] || "No Instruction"}</div>

      {/* Locals & Operands Container (50% height) */}
      <div className="flex flex-1 border-b max-h-[40%]">
        <div className="flex w-full">
          {/* Locals */}
          <div className="flex-1 border-r p-2 overflow-auto">
            <div className="font-semibold mb-1 subbox-header">locals</div>
            <div className="flex flex-col locals-text">
              {locals.map((local, i) => (
                <div key={i}>{operandToString(local)}</div>
              ))}
            </div>
          </div>

          {/* Operands */}
          <div className="flex-1 p-2 overflow-auto">
            <div className="font-semibold mb-1 subbox-header">operands</div>
            <div className="flex flex-col operands-text">
              {operands.map((operand, i) => (
                <div key={i}>{operandToString(operand)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stack Frames & Instruction Container (50% height) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Stack Frames */}
{/* 
<div className="border-r p-2 overflow-y-auto">
          <div className="font-semibold mb-1">stack frames</div>
          <div className="flex flex-col ">
              <div className="border-t pt-1">
                  <Frame {...currFrame} />
              </div>
            {stackFrames.map((frame, i) => (
              <div key={i} className="border-t pt-1">
                 <Frame name = {frame.name} pc = {frame.pc} /> 
              </div>
            ))}
          </div>
        </div>
*/}

<div className="flex flex-col justify-between h-64 border-r p-2 overflow-y-auto max-w-[45%]">
{/* <!-- Stack frames (content) --> */}
  <div className="flex flex-col flex-grow justify-end space-y-reverse space-y-1  ">
      <div className="break-all border-t pt-1 frame-text"> <Frame {...currFrame} /> </div>
      {stackFrames.map((frame, i) => (
        <div className="break-all border-t pt-1 frame-text"> <Frame name = {frame.name} pc = {frame.pc} /> </div>
      ))}
  </div>

{/*<!-- Label at the bottom --> */}
  <div className="font-semibold subbox-header">stack frames</div>
</div>
        {/* Instructions */}
        <div className="flex-1 p-2 overflow-y-auto">
          <div className="font-semibold mb-1 subbox-header">instruction</div>
          <div className="flex flex-col ">
            {code.slice(pc, pc + 6).map((instruction, i) => {
                const props = {instruction, i, pc}
                return ( <Instruction {...props}/>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Instruction({instruction, pc, i}) {
    return (
          <p className= {`py-2 ${i == 0 ? 'bg-blue-200':''} instruction-text`}>
                {pc+i}: {instruction} 
          </p>
      )
}

function Frame({name, pc}){
return ( <> {name} | <span class="pc-text">pc: {pc}</span></>)
}


const operandToString = (operand) => {
if(typeof operand == "object"){
  const [type, rawValue] = Object.entries(operand)[0]
const value = type == "Ref" || type == "Reference" ? rawValue.replace("Object Id: ", ""): rawValue;
return `${type == "Reference" ? "Ref" : type}: ${value}`
}
else{
return operand
}
}

