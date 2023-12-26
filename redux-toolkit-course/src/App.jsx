/** @format */
import "./App.css";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className='p-5 w-[600px] mx-auto rounded shadow-lg'>
        <Addtodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
