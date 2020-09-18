import React from "react";
import "./Footer.css";

export default function Weather() {
  return (
    <div className="Footer">
      <small>
        <a
          className="link"
          href="https://github.com/lufasano/Weather-app"
          target="_blank"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/lucianafasano/"
          target="_blank"
        >
          Luciana Fasano.
        </a>
      </small>
    </div>
  );
}
