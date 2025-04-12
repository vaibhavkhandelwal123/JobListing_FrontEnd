import React, { useEffect, useState } from "react";
import Box from "../components/Box";

const List = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="bg-gray-200">
      <h1 className="flex justify-center text-3xl">List</h1>
      <div className="flex flex-col items-center mt-10">
      <input type="text" value={value} placeholder="Search..." className="mt-4 p-2 border rounded min-w-md" />

      </div>
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-2 gap-4 mt-10 mx-10">
        {users.map((user) => (
          <Box
            profile={user.profile}
            desc={user.desc}
            exp={user.exp}
            skills={Array.isArray(user.techs) ? user.techs.join(", ") : user.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
