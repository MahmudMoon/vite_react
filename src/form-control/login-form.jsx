import { useState } from "react";
import "./login-form.css";
import { data } from "../assets/data";

const LoginForm = () => {
  let [user, setUser] = useState({});
  let [usersData, setUsersData] = useState(data);
  let [validUser, setValidUser] = useState(false);

  const onFormInputChange = (e) => {
    if (e.target.name == "email") {
      if (e.target.value.length > 5) {
        setUser((currentStatus) => {
          return { ...currentStatus, email: e.target.value };
        });
        let length = user?.password?.length || 0;
        if (length > 5) {
          setValidUser(true);
        }
      } else {
        setUser((currentStatus) => {
          return { ...currentStatus, email: e.target.value };
        });
        setValidUser(false);
      }
    } else if (e.target.name == "password") {
      if (e.target.value.length > 5) {
        setUser((currentStatus) => {
          return { ...currentStatus, password: e.target.value };
        });
        let length = user?.email?.length || 0;
        if (length > 5) {
          setValidUser(true);
        }
      } else {
        setUser((currentStatus) => {
          return { ...currentStatus, password: e.target.value };
        });
        setValidUser(false);
      }
    }
  };

  return (
    <div>
      <form
        className="container"
        action="submit"
        onSubmit={(e) => {
          console.log("form submitted");
          e.preventDefault();
          console.log(user);
          setUsersData((currentStatus) => {
            return [...currentStatus, user];
          });
          setUser({});
        }}
      >
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
        </div>
        <div>
          <input
            className="inputs"
            type="email"
            name="email"
            id="email"
            placeholder=">5 characters"
            value={(user && user.email) || ""}
            onChange={onFormInputChange}
          />
        </div>

        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
        </div>
        <div>
          <input
            className="inputs"
            type="password"
            name="password"
            id="password"
            placeholder=">5 characters"
            value={(user && user.password) || ""}
            onChange={onFormInputChange}
          />
        </div>

        {validUser && (
          <div>
            <button id="login-btn" type="submit">
              Login now
            </button>
          </div>
        )}
      </form>
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
