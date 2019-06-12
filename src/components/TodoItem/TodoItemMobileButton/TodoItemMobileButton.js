import React from "react";
import classNames from "classnames";

import "./style.css";

const TodoItemMobileButton = props => {
  let mobileButtonStyle = classNames({
    "ui labeled icon button fluid": true,
    mobileButtonLight: props.isComplete
  });

  let mobileButtonCompleteIcon = classNames({
    icon: true,
    check: !props.isComplete,
    undo: props.isComplete
  });

  return (
    <div className="eight wide column center aligned mobile only mobileButtonColumn">
      <button className={mobileButtonStyle} onClick={props.onClick}>
        <i className={mobileButtonCompleteIcon} />
        {props.buttonText}
      </button>
    </div>
  );
};

export default TodoItemMobileButton;
