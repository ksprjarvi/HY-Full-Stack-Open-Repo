const Button = (props) => {
  return <button onClick={props.makeTask}>{props.buttonText}</button>;
};

export default Button;
