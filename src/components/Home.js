import React, { useState, useEffect } from "react";
import User from "./User";
import { getUsers } from "../api";
import { useInfiniteScroll } from "../context/infiniteScroll";

function Home() {
  const { currentPage, loading, setLoading } = useInfiniteScroll();
  const [users, setUsers] = useState([]);
  const [usersTotalControl, setUsersTotalControl] = useState({ nextPage: 1 });

  async function fetchData() {
    setLoading(true);
    const { list: tempUsers, pagination } = await getUsers(currentPage, 20);
    setUsers([...users, ...tempUsers]);
    setUsersTotalControl({
      ...usersTotalControl,
      nextPage: pagination.nextPage,
    });
    setLoading(false);
  }

  useEffect(() => {
    if (!usersTotalControl.nextPage) return;
    fetchData();
  }, [currentPage]);

  if (Object.keys(users).length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <main className="users">
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
      {loading && <h1>fetching more data</h1>}
    </main>
  );
}

export default Home;
