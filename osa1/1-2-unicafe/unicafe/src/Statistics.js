import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (props.hasStatistics) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>statistics</th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine statistic={props.good} statisticText="good" />
            <StatisticLine statistic={props.neutral} statisticText="neutral" />
            <StatisticLine statistic={props.bad} statisticText="bad" />
            <StatisticLine statistic={props.all} statisticText="all" />
            <StatisticLine statistic={props.average} statisticText="average" />
            <StatisticLine
              statistic={props.positives}
              statisticText="positives"
            />
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
