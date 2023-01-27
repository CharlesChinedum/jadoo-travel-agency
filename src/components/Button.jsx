const Button = ({ name, padding, color, shadowValue, shadow }) => {
  return (
    <button
      className={`p-${padding} bg-${color} rounded-[10px] shadow-[${shadow}] shadow-[${shadowValue}]`}
    >
      {name}
    </button>
  );
};

export default Button;

{
  /* <Button
                  name="Find out more"
                  color="[#F1A501]"
                  padding="2"
                  shadow="[0px_20px_35px]"
                  shadowValue="[#F1A50126]"
                /> */
}
