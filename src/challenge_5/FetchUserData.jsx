import { useEffect, useState } from "react";
let usersData = [];
const FetchingData = () => {
  let [users, setUsers] = useState(usersData);
  useEffect(() => {
    console.log("fetching data....");
    const fetchGithubUser = async () => {
      try {
        let response = await fetch("https://api.github.com/users");
        console.log(response);
        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setUsers(result);
        } else {
          console.log("response not found ");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchGithubUser();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt="" style={{ width: "60px" }} />
                </td>
                <td>
                  <a href={user.html_url} target="_blank">
                    Profile
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchingData;
