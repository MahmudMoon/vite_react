import { useCallback, useState } from "react";
import "./login-form.css";
import { data } from "../assets/data";
import MainForm from "./main-form";

const LoginForm = () => {
  let [usersData, setUsersData] = useState(data);

  const handleSubmitForm = useCallback(() => {
    setUsersData((currentStatus) => {
      return [...currentStatus, user];
    });
  }, [usersData]);

  return (
    <div>
      {<MainForm handler={handleSubmitForm} />}
      <h2>User's list</h2>
      {console.log("==> ", usersData)}
      <DisplayUsers setUsersData={setUsersData} myData={usersData} />
    </div>
  );
};

const DisplayUsers = (props) => {
  let usersData = props.myData;
  let setUsersData = props.setUsersData;

  console.log("<== ", usersData);
  return (
    <div>
      <table>
        {usersData.map((currentUser) => {
          console.log(currentUser);
          return (
            <tr>
              <td>{currentUser.email}</td>
              <td>{currentUser.password}</td>
              <td>
                <button
                  style={{ backgroundColor: "white" }}
                  onClick={() => {
                    console.log("delete use");
                    setUsersData(
                      usersData.filter((us) => currentUser.email != us.email)
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default LoginForm;
