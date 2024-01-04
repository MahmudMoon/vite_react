import { useState } from "react";

let person = {
  name: "john",
  age: 28,
  hobby: "reading books",
};

const UpdateStateObject = () => {
  let [person, setPerson] = useState({
    name: "john",
    age: 28,
    hobby: "reading books",
  });
  console.log(person);
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.hobby}</p>
      <button
        onClick={() => {
          //setPerson({ ...person, hobby: "sleeping" });
          setPerson((currentStatus) => {
            return { ...currentStatus, hobby: "sleeping" };
          });

          setTimeout(() => {
            console.log("clicked");
            // setPerson({ ...person, age: person.age + 1 });
            setPerson((currentStatus) => {
              return { ...currentStatus, age: currentStatus.age + 1 };
            });
          }, 3000);
        }}
      >
        Update Now
      </button>
    </div>
  );
};

export default UpdateStateObject;
