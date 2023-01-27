const NavButton = ({ name, border, padding, className }) => {
  return (
    <button
      // className={`hover:border-black hover:border-[1px] px-3 py-0 rounded-md`}
      className={className}
    >
      {name}
    </button>
  );
};

export default NavButton;
