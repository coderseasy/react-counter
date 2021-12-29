import Counter from "./components/Counter";
import Giphy from './components/Giphy';

function App() {
  const init=0;
  return (
    <div className='container my-5'>
      {/* <Counter inicio={init}/> */}
      <Giphy />
    </div>
  );
}

export default App;
