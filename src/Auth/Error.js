import React from "react";
import { AlertCircle } from "react-feather";

export default function Error({ errorName }) {
  return (
    <div>
      <p
        className="m-0 p-0 pt-0"
        style={{ fontSize: 13, color: "red", float: "left" }}
      >
        <AlertCircle
          size="1em"
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
          }}
        />{" "}
        {errorName}
      </p>
    </div>
  );
}
