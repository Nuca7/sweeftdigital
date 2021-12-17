import React, { useState, useEffect } from "react";
import { getUserFriends } from "../api";
import User from "./User";
import { useInfiniteScroll } from "../context/infiniteScroll";

function UserFriends({ Id, userFriends, setUserFriends }) {
  const { currentPage, loading, setLoading } = useInfiniteScroll();
  const [userFriendsTotalControl, setUserFriendsTotalControl] = useState({
    nextPage: 1,
  });

  async function fetchData() {
    setLoading(true);
    const { list: tempUserFriends, pagination } = await getUserFriends(
      Id,
      currentPage,
      20
    );
    setUserFriends([...userFriends, ...tempUserFriends]);
    setUserFriendsTotalControl({
      ...userFriendsTotalControl,
      nextPage: pagination.nextPage,
    });
    setLoading(false);
  }

  useEffect(() => {
    if (!userFriendsTotalControl.nextPage) return;
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h3>Friends:</h3>
      <div className="users">
        {userFriends.map((user) => {
          return <User key={user.id} {...user} />;
        })}
        {loading && <h1>fetching more data</h1>}
      </div>
    </div>
  );
}

export default UserFriends;
