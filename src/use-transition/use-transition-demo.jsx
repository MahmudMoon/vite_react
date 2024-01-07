import { useState, useTransition } from "react";

const TransitionDemo = () => {
  let [items, setItems] = useState(null);
  let [isLoading, startTransition] = useTransition();

  const handleInputChange = (count) => {
    let data = parseInt(count) || 0;
    console.log(data);
    startTransition(() => {
      let itemsData = [];
      for (let i = 0; i < data; i++) {
        itemsData.push(<img src="vite.svg"></img>);
      }
      console.log(itemsData);
      setItems(itemsData);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Count"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          items &&
          items.map((item) => {
            return (
              <div>
                <img src="vite.svg" alt="" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TransitionDemo;
