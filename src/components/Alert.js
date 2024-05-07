import React from "react";

export default function Alert(props) {
  // There are two ways to capitalize the string

  //   const capitalize = (str) => {
  //     return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
  //   }

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}
