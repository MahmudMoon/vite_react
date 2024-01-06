import {
  CheckBoxEntry,
  EmailEntry,
  GenderEntry,
  PasswordEntry,
} from "./inputs";

import { memo } from "react";

const MainForm = (props) => {
  let handleFormInput = props.handler;
  return (
    <form
      className="container"
      action="submit"
      onSubmit={(e) => {
        console.log("form submitted");
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let user = Object.fromEntries(formData);
        console.log(user);
        if (!user?.email || !user?.password) {
          return;
        }

        handleFormInput(user);
      }}
    >
      <div>
        <label className="label" htmlFor="email">
          Email
        </label>
      </div>
      <div>{<EmailEntry />}</div>

      <div>
        <label className="label" htmlFor="password">
          Password
        </label>
      </div>
      <div>{<PasswordEntry />}</div>

      <div>
        <label htmlFor="select-gender">Select Gender</label>
        {<GenderEntry />}
      </div>
      <div>
        {<CheckBoxEntry />}
        <label htmlFor="checkbox">i agree with terms and conditions</label>
      </div>

      {
        <div>
          <button id="login-btn" type="submit">
            Login now
          </button>
        </div>
      }
    </form>
  );
};

export default memo(MainForm);
