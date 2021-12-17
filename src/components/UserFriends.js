import React, { useEffect } from "react";
import { getUserFriends } from "../api";
import User from "./User";
import { useInfiniteScroll } from "../context/infiniteScroll";

function UserFriends({ Id, userFriends, setUserFriends }) {
  const { currentPage, setLoading } = useInfiniteScroll();

  async function fetchData() {
    const { list: tempUserFriends, pagination } = await getUserFriends(
      Id,
      currentPage,
      20
    );

    const userTotal = pagination.current * pagination.pageSize;
    if (userTotal > pagination.total) return;

    setUserFriends([...userFriends, ...tempUserFriends]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h3>Friends:</h3>
      <div className="users">
        {userFriends.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
}

export default UserFriends;
