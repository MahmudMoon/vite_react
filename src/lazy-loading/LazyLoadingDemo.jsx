import { useState } from "react";

const LazyLoading = () => {
  let [items, setItems] = useState([]);
  const loading = (data) => {
    let itemsData = [];
    for (let i = 0; i < data; i++) {
      itemsData.push(<img src="vite.svg"></img>);
    }
    console.log(itemsData);
    setItems(itemsData);
  };

  return (
    <div>
      <button
        onClick={() => {
          loading(5000);
        }}
      >
        {" "}
        Click
      </button>
      {items &&
        items.map((item) => {
          return (
            <div>
              <img src="vite.svg" alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default LazyLoading;
