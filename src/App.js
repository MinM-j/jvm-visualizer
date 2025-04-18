// import logo from './logo.svg';
import './App.css';
// import GarbageCollection from './GarbageCollection';
import InstructionExecution from './InstructionExecution';
import MemoryAllocation from './MemoryAllocation';
import StackVisualization from './StackVisualization';
import React from "react"
import jsonData from "./data/dump.json"

function App() {
  const [data, setData] = React.useState(jsonData)
  const [memorySize, setMemorySize] = React.useState(0)
const [memory, setMemory] = React.useState({young: [], old: []})
  const [stacks, setStacks] = React.useState([])
  //const [pc, setPC] = React.useState(0)
  //const [operands, setOperands] = React.useState([])
  const [frame, setFrame] = React.useState({name: "",locals: [], operands: [], pc: 0, name: "" })
  const [cei, setCEI] = React.useState(null)

  function handleClick(e){
    const [event, ...rest_data] = data
    console.log("event: ", event)
    setData(rest_data)
// maybe in dumped json has an explicit locals|operands_size and locals|operands array
/*
* in header: stack, action: push
* locals: 2 is the maximum no of locals, determined at compile time
* operands: operands stack, has an maximum size
*/
    switch(event.header){
      case "stack":// todo: also set frame
            const { action, code, header, locals, name, operands } = event;
            if (action == "push"){
                const parsedCode = code.split(/[\[\],]/).filter(item => item) //handle this in baceknd
                console.log(parsedCode)
                //const parsedCode = JSON.parse(code) //parse this in backend
                setStacks([parsedCode, ...stacks])
            }
            else if(action == "pop"){
            const [curr_frame, ...rest_frames] = stacks
            setStacks(rest_frames)
          }
            break;

        case "memory":
            setMemory({...memory, old: event.old, young: event.young})
            break;

        case "init":
            setMemorySize(event["memory size"])
            break;

        case "frame":
          setFrame({...frame, locals: event.locals, operands: event.operands, pc: event.pc, name: event.name})
          break;

        case "cei":
          setCEI(event.value)
          break;

        default:
          alert(`unhandled header ${event.header}`)
    }
  }
// current instructions of frame
const instructions = stacks.length > 0 ? stacks[0]:[]
const pc = frame.pc

  return (
        <>
<main>
    <div className="App">
        <div className="instruction text-center">
        <a className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Instructions
        </a>
        <InstructionExecution cei={cei} instructions={instructions} pc={pc}/>
        </div>
        <div className="memory text-center">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Memory
        </a>
      <MemoryAllocation memorySize = {memorySize} memory={memory} />
         <button 
            onClick={handleClick} 
            style = {{margin: "auto", padding: "1em", border: "2px solid green", textAlign: "center"}}
          >
            Next 
        </button> 
        </div>
        <div className="garbage text-center">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Stack
        </a>
        <StackVisualization currFrame = {frame}/>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        3rd Item
        </a> */}
    </div>
    </main>
    </>
  );
}

export default App;
