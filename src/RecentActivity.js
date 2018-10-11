import React from "react";
import PullRequests from "./PullRequests.js";
import Forks from "./Forks.js";

const RecentActivity = props => {
  return (
    <React.Fragment>
      <h2>Recent Github Activity</h2>
      <ul>{props.events.map((event, i) => <li key={`event-${i}`} />)}</ul>
    </React.Fragment>
  );
};
