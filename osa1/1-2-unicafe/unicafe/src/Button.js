const Button = (props) => {
  return <button onClick={() => console.log("moi")}>{props.buttonText}</button>;
};

export default Button;
