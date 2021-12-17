import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserFriends, getUser } from "../api";
import UserAddress from "./UserAddress";
import UserFriends from "./UserFriends";
import UserInfo from "./UserInfo";
import History from "./History";

function UserDetailed() {
  const { Id } = useParams();
  const [user, setUser] = useState({});
  const [userFriends, setUserFriends] = useState([]);

  async function fetchData() {
    const tempUser = await getUser(Id);
    setUser(tempUser);
    const { list: tempUserFriends } = await getUserFriends(Id, 1, 20);
    setUserFriends([...tempUserFriends]);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [Id]);

  if (Object.keys(user).length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="userDetailed">
      <div className="details">
        <img
          src={`${user.imageUrl}?v=${user.id}`}
          alt={`${user.prefix} ${user.name} ${user.lastName}`}
        />
        <UserInfo {...user} />
        <UserAddress {...user.company} {...user.address} />
      </div>
      <History {...user} />
      <UserFriends
        Id={Id}
        userFriends={userFriends}
        setUserFriends={setUserFriends}
      />
    </section>
  );
}

export default UserDetailed;
