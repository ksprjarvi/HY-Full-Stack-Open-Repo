const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.statisticText} </td>
      <td>{props.statistic}</td>
    </tr>
  );
};

export default StatisticLine;
