import Header from "./Header";
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (props.hasStatistics) {
    return (
      <div>
        <Header header="statistics" />
        <StatisticLine statistic={props.good} statisticText="good" />
        <StatisticLine statistic={props.neutral} statisticText="neutral" />
        <StatisticLine statistic={props.bad} statisticText="bad" />
        <StatisticLine statistic={props.all} statisticText="all" />
        <StatisticLine statistic={props.average} statisticText="average" />
        <StatisticLine statistic={props.positives} statisticText="positives" />
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
