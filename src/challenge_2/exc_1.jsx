import { users } from "./user_data";
import "./exc_1.css";
import { useState } from "react";

const DisplayUsers = () => {
  //console.log(users);
  let [usersData, setUsersData] = useState(users);

  const removeSingleUser = (id) => {
    let updatedUserList = usersData.filter((user) => {
      return user.id != id;
    });
    setUsersData(updatedUserList);
  };

  return (
    <>
      {usersData &&
        usersData.map((user) => {
          console.log(user);
          return (
            <div>
              <table>
                <tbody>
                  <tr>
                    <User user={user} removeSingleUser={removeSingleUser} />
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      <div>
        <button
          onClick={() => {
            setUsersData();
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

const User = (props) => {
  let { id, name, age, salary } = props.user;
  return (
    <table>
      <tbody>
        <td>{name}</td>
        <td>{age}</td>
        <td>{salary}</td>
        <td>
          <button
            className="delete-row"
            onClick={() => {
              console.log(id);
              props.removeSingleUser(id);
            }}
          >
            Delete
          </button>
        </td>
      </tbody>
    </table>
  );
};

export default DisplayUsers;
