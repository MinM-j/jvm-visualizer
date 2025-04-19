import React from 'react'

const InstructionExecution = ({cei, instructions, pc}) => {
  return (
     <div className="border-[3px] border-black p-4 flex flex-col w-[22vw] mt-10">
      {/* Instructions Box */}
      <div className="border-2 border-black flex-1 flex flex-col p-2 bg-lime-50 bg-opacity-90">
        <p className="text-black text-xl font-bold mb-2">Instructions:</p>
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-black">
             {instructions.length > 0 &&
             instructions.slice(pc, pc+10).map((instruction, i, _) => <>
        <p className= {`py-2 ${i == 0 ? 'bg-blue-200':''} `}>{pc+i}: {instruction} </p>
        </>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionExecution
