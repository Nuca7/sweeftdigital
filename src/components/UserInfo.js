import React from "react";

function UserInfo({
  name,
  lastName,
  prefix,
  title,
  jobArea,
  jobType,
  email,
  ip,
}) {
  return (
    <div className="info">
      <p className="title">Info</p>

      <div className="name">
        <h3>{`${prefix} ${name} ${lastName}`}</h3>
        <p>{title}</p>
      </div>

      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Ip Address:</span> {ip}
      </p>
      <p>
        <span>Job Area:</span> {jobArea}
      </p>
      <p>
        <span>Job Type:</span> {jobType}
      </p>
    </div>
  );
}

export default UserInfo;
