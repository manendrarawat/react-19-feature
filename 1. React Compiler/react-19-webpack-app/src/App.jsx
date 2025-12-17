import { useState, useMemo} from "react"
import Parent from "./components/Parent";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };  

 

  const expensiveComputation = useMemo(() => {
  console.log('Expensive computation running...');
  return count1 * 2;
}, [count1]);


 console.count('App render :>> ');
  return (
    <div>
     
      <Parent count1={count1} incrementCount1={incrementCount1}/>
      <button onClick={incrementCount2}>Counter 2: {count2}</button>

      <h3>Expensive Computation Result: {expensiveComputation}</h3>

    </div>
  )
}
