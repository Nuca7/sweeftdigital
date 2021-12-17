import React, { useState, useEffect } from "react";
import User from "./User";
import { getUsers } from "../api";
import { useInfiniteScroll } from "../context/infiniteScroll";

function Home() {
  const { currentPage, setLoading } = useInfiniteScroll();
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { list: tempUsers, pagination } = await getUsers(currentPage, 20);

    const userTotal = pagination.current * pagination.pageSize;
    if (userTotal > pagination.total) return;

    setUsers([...users, ...tempUsers]);
    setLoading(false);
  }

  useEffect(() => {
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
    </main>
  );
}

export default Home;
