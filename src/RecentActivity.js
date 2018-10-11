import React from "react";
import PullRequests from "./PullRequests.js";
import Forks from "./Forks.js";

const RecentActivity = props => {
  return (
    // <ul>{props.events.map((event, i) => <li key={`event-${i}`} />)}</ul>
    <React.Fragment>
      <h2>Recent Github Activity</h2>

      <PullRequests pullRequests={props.pullRequests} />
      <Forks forks={props.forks} />
    </React.Fragment>
  );
};

export default RecentActivity;
