import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import Counter from "./components/Counter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import TextIncrease from "./components/TextIncrease";
function App() {
  return (
   <>
   <center>
    <h1>Counter</h1>
   </center>
   <Counter/>
   <IncreaseByTwoCounter/>
   <IncreaseCounter/>
   <DecreaseCounter/>
   <br/>
   <TextIncrease/>
   </>
  );
}

export default App;
