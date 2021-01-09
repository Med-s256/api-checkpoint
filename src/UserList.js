import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>LIST OF USERS</h1>
      {userList.map((user) => (
        <div key={user.id} className="user">
          <div className='name'>
            <h3>name :</h3>
            {user.name}
          </div>
          <div className="class">
            <div className="email">
              <p>Email: </p>
              <p>{user.email}</p>
            </div>
            <div className="email">
              <p>Phone number: </p>
              <p>{user.phone}</p>
            </div>
            <div className="email">
              <p>Address: </p>
              <div className='s-add'>
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
