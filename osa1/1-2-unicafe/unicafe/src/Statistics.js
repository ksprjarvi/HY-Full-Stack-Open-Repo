import Header from "./Header";

const Statistics = (props) => {
  return (
    <div>
      <Header header="statistics" />
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {props.all}</p>
      <p>Average {props.average}</p>
      <p>Positives {props.positives}</p>
    </div>
  );
};

export default Statistics;
