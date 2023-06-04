import { useState } from "react";
import Header from "./Header";
import Statistics from "./Statistics";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [sum, setSum] = useState(0);
  const [positives, setPositives] = useState(0);

  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = all + 1;
    setAll(updatedAll);
    const updatedSum = sum + 1;
    setSum(updatedSum);
    const updatedAverage = updatedSum / updatedAll;
    setAverage(updatedAverage);
    const updatedPositives = (updatedGood / updatedAll) * 100;
    setPositives(updatedPositives);
  };

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = all + 1;
    setAll(updatedAll);
    const updatedSum = sum + 0;
    setSum(updatedSum);
    const updatedAverage = updatedSum / updatedAll;
    setAverage(updatedAverage);
    const updatedPositives = (good / updatedAll) * 100;
    setPositives(updatedPositives);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    const updatedAll = all + 1;
    setAll(updatedAll);
    const updatedSum = sum - 1;
    setSum(updatedSum);
    const updatedAverage = updatedSum / updatedAll;
    setAverage(updatedAverage);
    const updatedPositives = (good / updatedAll) * 100;
    setPositives(updatedPositives);
  };

  return (
    <div>
      <Header header="give feedback" />
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positives={positives}
      />
    </div>
  );
};

export default App;
