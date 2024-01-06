import { useState } from "react";
import "./form-data-api.css";
import { data, genders } from "../assets/data";

const FormDataApi = () => {
  let [usersData, setUsersData] = useState(data);

  const handleFormInput = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let formInputs = Object.fromEntries(formData);
    console.log(formInputs);
    let { email, password, gender, termsconditions } = formInputs;
    console.log(email, password, gender, termsconditions);
    email &&
      password &&
      gender &&
      termsconditions &&
      setUsersData((currentStatus) => {
        return [...currentStatus, formInputs];
      });
  };
  return (
    <div>
      <form className="container" action="submit" onSubmit={handleFormInput}>
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
          />
        </div>

        <div>
          <label htmlFor="select-gender">Select Gender</label>
          <select
            name="gender"
            id="select-gender"
            onSelect={() => {
              console.log("select");
            }}
          >
            {genders.map((gender) => {
              return <option>{gender}</option>;
            })}
          </select>
        </div>
        <div>
          <input type="Checkbox" id="checkbox" name="termsconditions" />
          <label htmlFor="checkbox">i agree with terms and conditions</label>
        </div>

        <div>
          <button id="login-btn" type="submit">
            Login now
          </button>
        </div>
      </form>

      <h2>User's list</h2>
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

export default FormDataApi;
