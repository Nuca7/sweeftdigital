import React from "react";

function UserAddress({
  city,
  country,
  name,
  state,
  streetAddress,
  suffix,
  zipCode,
}) {
  return (
    <div className="address">
      <p className="title">Address</p>

      <h3>{`${name} ${suffix}`}</h3>

      <p>
        <span> City:</span> {city}
      </p>
      <p>
        <span> Country:</span> {country}
      </p>
      <p>
        <span> State:</span> {state}
      </p>
      <p>
        <span> Street Address:</span> {streetAddress}
      </p>
      <p>
        <span> ZIP:</span> {zipCode}
      </p>
    </div>
  );
}

export default UserAddress;
