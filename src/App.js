// import logo from './logo.svg';
import './App.css';
// import GarbageCollection from './GarbageCollection';
import InstructionExecution from './InstructionExecution';
import MemoryAllocation from './MemoryAllocation';
import MemorySocketWrapper from './SocketWrapper';
import StackVisualization from './StackVisualization';

function App() {
    const memoryBoxesData = [
    { id: 1, content: 'Box 1' },
    { id: 2, content: 'Box 2' },
  ];
    const memoryColumns = [
    [ { id: 'a', content: 'L-Box 1' }, { id: 'b', content: 'L-Box 2' } ],
    [ { id: 'c', content: 'R-Box 1' }, { id: 'd', content: 'R-Box 2' } ],
  ];
  return (
        <>
        {/* <h2 className="font-bold" style={{textAlign:'center',fontSize:'3rem',textDecoration:'underline'}}>JVM Visualization</h2> */}
    <div className="App">
        <div className="instruction text-center">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Instructions
        </a>
        <InstructionExecution/>
        </div>
        <div className="memory text-center">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Memory
        </a>
        <MemorySocketWrapper/>
        </div>
        <div className="garbage text-center">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
        Stack
        </a>
        <StackVisualization/>
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
    </>
  );
}

export default App;
