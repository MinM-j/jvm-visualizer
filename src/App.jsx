import './App.css';
import MemoryAllocation from './MemoryAllocation';
import StateVisualizer from "./StateVisualizer.js"
import React from "react"
//
//import jsonData from "./data/callstack.json"
//import jsonData from "./data/mem_test.json"
//import jsonData from "./data/garbage_test.jsonn""
//import jsonData from "./data/no_mem_test.json"
//import jsonData from "./data/my_number_test.json"
import jsonData from "./data/obj_array_test.json"
//import jsonData from "./data/for_bipul.json"

function codeToString(code){
    if(typeof code == "object"){
        const [instruction, args] = Object.entries(code)[0]
        if(typeof(args) == "number"){
            return `${instruction}(${args})`
        }
        else if(typeof(args) == "object") {//array
            console.log("code ", code)
            console.log("args ", args)
            return `${instruction}(${args.join(",")})`
        }
    }
    return code; //string
}

function App() {
const dummyFrame = {name: "",locals: [], operands: [], pc: 0, code: []};
  const [data, setData] = React.useState(jsonData)
  const [memorySize, setMemorySize] = React.useState(0)
  const [memory, setMemory] = React.useState({young: [], old: []})
  const [currFrame, setCurrFrame] = React.useState({name: "",locals: [], operands: [], pc: 0, code: []})
  const [stackFrames, setStackFrames] = React.useState([])
  const [cei, setCEI] = React.useState(null)


  function handleClick(e){
  consumeEvent()
  }

  function consumeEvent(){
      if(data.length == 0){
      alert("Program execution completed");
      return;
      }

    const [event, ...rest_data] = data
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
                //const parsedCode = code.split(/[\[\],]/).filter(item => item) //handle this in baceknd
                const parsedCode = code.map(codeToString)
                  code.forEach((el, i) => {console.log(el, " ", parsedCode[i])})

                const new_frame = {code: parsedCode, name: name, operands:[], locals: []}
                const newStackFrames = currFrame.name == "" ? [] : [currFrame, ...stackFrames]
                setCurrFrame(new_frame)
                setStackFrames(newStackFrames)
            }
            else if(action == "pop"){
              const [maybeTopFrame, ...rest_frames] = stackFrames
              const topFrame = maybeTopFrame ? maybeTopFrame: dummyFrame;
              setCurrFrame(topFrame)
              setStackFrames(rest_frames)
          }
            break;

        case "memory":
            setMemory({...memory, old: event.old, young: event.young})
            break;

        case "init":
            setMemorySize(event["memory size"])
            break;

        case "frame":
        setCurrFrame({...currFrame, 
                locals: event.locals,
                operands: event.operands,
                pc: event.pc,
                name: event.name})
          break;

        case "cei":
          setCEI(event.value)
          break;

        default:
          alert(`unhandled header ${event.header}`)
    }
}
  return (
<>

<main className="p-4">
  <div className="App">
    {/* Left: JVMVisualizer takes only necessary width */}
    <div className="app-child left w-full ">
      <p className="box-label" >Stack</p>
      <StateVisualizer stackFrames={stackFrames} currFrame={currFrame} />
    </div>

    {/* Right: MemoryAllocation takes the rest */}
    <div className="app-child right flex-1 w-full max-h-[100%] flex flex-col">
      <p className="box-label" > Memory ({memorySize}) </p>
      <MemoryAllocation memorySize={memorySize} memory={memory} />
    </div>
  </div>

  <button 
    onClick={handleClick} 
    className="block m-auto border-2 border-black px-8 py-3 rounded-xl bg-white text-xl font-semibold mt-20 hover:bg-black hover:text-white transition duration-300 ease-in-out"
  >
    Next 
  </button> 
</main>
</>
);
}

export default App;
