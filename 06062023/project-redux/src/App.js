import './App.css';
import React from 'react'
import Counter from './components/Counter'
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'
import IncreaseCounter from './components/IncreaseCounter'
import { Row } from 'reactstrap';
import IncreaseByThreeCounter from './components/IncreaseByThreeCounter';
function App() {
  return (
    <>
    <div>
      <center>
        <h1>Counter</h1>
      </center>
      <Row>
        <Counter/>
          <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
        <IncreaseByThreeCounter/>
      </Row>
    </div>
    </>
  );
}

export default App;
