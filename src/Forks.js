import React from "react";

export default ({ events }) => {
  return (
    <div>
      <ul>
        {events.map((event, i) => {
          if (event.type === "ForkEvent") {
            return (
              <div key={`forkEvent-${i}`}>
                <div>
                  <h4>Github Repo Name:</h4>
                  <p key={`forkEvent-${i}`}>
                    <a href={event.forkee.html_url}>{event.repo.name}</a>
                  </p>
                </div>

                <div>
                  <h4>Github Repo Link:</h4>
                  <p key={`forkEventURL-${i}`}>
                    <a href={event.forkee.html_url}>Fork URL</a>
                  </p>
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
