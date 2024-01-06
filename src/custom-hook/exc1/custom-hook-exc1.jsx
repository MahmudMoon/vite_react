import useToggle from "./use-toggle-hook";

const handleTurnClick = (toggleResult) => {
  console.log("toggled");
  toggleResult.changeToggle(!toggleResult.toggle);
};

const CustomHookExc1 = () => {
  let toggleResult = useToggle(false);
  console.log(toggleResult);
  return (
    <div>
      <button
        onClick={() => {
          handleTurnClick(toggleResult);
        }}
      >
        Turn
      </button>
      {toggleResult.toggle && <p>Data here</p>}
    </div>
  );
};

export default CustomHookExc1;
