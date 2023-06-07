const StatisticLine = (props) => {
  return (
    <div>
      <p>
        {props.statisticText} {props.statistic}
      </p>
    </div>
  );
};

export default StatisticLine;
