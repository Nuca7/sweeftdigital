import React from "react";
import { Link } from "react-router-dom";

function User({ id, imageUrl, lastName, name, prefix, title }) {
  return (
    <article>
      <Link to={`/user/${id}`} className="user">
        <img
          src={`${imageUrl}?v=${id}`}
          alt={`${prefix} ${name} ${lastName}`}
        />
        <h3>{`${prefix} ${name} ${lastName}`}</h3>
        <p>{title}</p>
      </Link>
    </article>
  );
}

export default User;
