import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className="profile page">
      <div className="container">
        <h3 className="mb-3 animate__animated animate__fadeIn">Profile</h3>
        <div className="profile-wrapper animate__animated animate__fadeIn">
          <p>
            <b>Name:</b> {user.firstname}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Bio:</b> {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
