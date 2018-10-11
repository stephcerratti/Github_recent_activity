import React from "react";

export default ({ events }) => {
  return (
    <div>
      <ul>
        {events.map((event, i) => {
          if (event.type === "PullRequestEvent") {
            return (
              <div key={`pullRequest-${i}`}>
                <div>
                  <h4>Github Repo Name:</h4>
                  <p key={`pullRequestEvent-${i}`}>
                    <a href={event.html_url}>{event.repo.name}</a>
                  </p>
                </div>

                <div>
                  <h4>Github Repo Link:</h4>
                  <p key={`pullRequestEventURL-${i}`}>
                    <a href={event.html_url}>Pull Request URL</a>
                  </p>
                </div>

                <div>
                  <h4>Pull Request Title</h4>
                  <p key={`pullRequestTitle-${i}`}>{event.title}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};
