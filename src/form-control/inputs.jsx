import { useState } from "react";
import { genders } from "../assets/data";

const EmailEntry = () => {
  let [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <input
      className="inputs"
      type="email"
      name="email"
      id="email"
      placeholder=">5 characters"
      value={email || ""}
      onChange={handleEmailChange}
    />
  );
};

const PasswordEntry = () => {
  let [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <input
      className="inputs"
      type="password"
      name="password"
      id="password"
      placeholder=">5 characters"
      value={password || ""}
      onChange={handlePasswordChange}
    />
  );
};

const GenderEntry = () => {
  return (
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
  );
};

const CheckBoxEntry = () => {
  let [check, setCheck] = useState(false);
  return (
    <input
      type="Checkbox"
      id="checkbox"
      name="checkbox"
      checked={check}
      onChange={() => {
        setCheck(!check);
      }}
    />
  );
};

export { EmailEntry, PasswordEntry, GenderEntry, CheckBoxEntry };
