// import logo from './logo.svg';
import './App.css';
import GarbageCollection from './GarbageCollection';
import MemoryAllocation from './MemoryAllocation';

function App() {
  return (
        <>
        <h2 style={{textAlign:'center',fontSize:'3rem',textDecoration:'underline'}}>JVM Visualization</h2>
    <div className="App">
        <div className="memory">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Memory Allocation
        </a>
        <MemoryAllocation/>
        </div>
        <div className="garbage">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Garbage Collection
        </a>
        <GarbageCollection/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        3rd Item
        </a>
    </div>
    </>
  );
}

export default App;
