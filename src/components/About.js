import React, { Fragment } from "react";
export default function About() {
  return (
    <Fragment>
      <div class="flexbox-container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rvSmIXoLFPnK_Tx0W36PFAHaEo%26pid%3DApi&f=1"
          alt="img rest front"
          className="secondary-img"
        />
        <div class="flexbox-item flexbox-item-1">
          <p>
            <h3>It's the news we've all been waiting for, we’re back open!</h3>{" "}
            There are no limitations on booking sizes, you no longer need to
            wear a mask in the venue and standing drinking will make a welcome
            return. If you fancy stopping by, propping up the bar and watching
            our bartenders make the best cocktails in Waterloo, be our guests!
            If you’re looking for a spot for after-work beers in Southwark then
            be sure to drop in.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
