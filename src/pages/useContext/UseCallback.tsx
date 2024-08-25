// see https://www.youtube.com/watch?v=MxIPQZ64x0I

import { useCallback, useState } from "react";
import Search from "./Search";
import utils from "../../utils/utils";

const allUsers: Array<string> = [
  "john",
  "alex",
  "lisa",
  "mandy",
  "george",
  "simon",
];

export default function UseCallback() {
  const [users, setUsers] = useState(allUsers);


  const handleSearch = useCallback((text: string) => {
    console.log("handleSearch text=",text,'user[0]=',users[0])
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  },[users]);

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(utils.shuffle(users))}>
          Shuffle
        </button>
        <Search onChange={handleSearch}></Search>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
