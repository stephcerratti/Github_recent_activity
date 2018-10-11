import React from "react";
import RecentActivity from "./RecentActivity.js";
import Button from "./Button.js";

const Profile = props => {
  return (
    <div className="profile">
      <h2>Hello {props.login}</h2>
      <img
        class="user-image"
        src={props.avatar_url}
        alt={`photo of ${props.login}`}
      />

      <Button value="Log Out" handleClick={props.handleLogOut} />
    </div>
  );
};

export default Profile;
