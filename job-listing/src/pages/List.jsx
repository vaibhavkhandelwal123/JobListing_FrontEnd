import React, { useEffect, useState } from "react";
import Box from "../components/Box";

const List = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const handleChangeit = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error.message);
      });
  }, []);

  const handleClick = () => {
    fetch(`http://localhost:8080/posts/${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error.message);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value.trim() !== "") {
      event.preventDefault();
      handleClick();
    }
    else{
      fetch("http://localhost:8080/posts")
        .then((response) => {
          if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => {
          console.error("Error fetching users:", error);
          setError(error.message);
        });
    }
  };

  return (
    <div className="bg-gray-200">
      <h1 className="flex justify-center text-3xl">List</h1>
      <div className="flex items-center mt-10">
        <input
          type="text"
          value={value}
          onChange={handleChangeit}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="mt-4 ml-100 p-2 border rounded min-w-md"
        />
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded ml-10"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-2 gap-4 mt-10 mx-10">
        {users.length > 0 ? (
          users.map((user) => (
            <Box
              key={user.id}
              profile={user.profile}
              desc={user.desc}
              exp={user.exp}
              skills={Array.isArray(user.techs) ? user.techs.join(", ") : user.techs}
            />
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default List;
