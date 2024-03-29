import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const formatDate = date => date.toLocaleDateString();

const Avatar = props => (
  <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
);

const UserInfo = props => (
  <div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">{props.user.name}</div>
  </div>
);

const Comment = props => (
  <div className="Comment">
    <UserInfo user={props.author} />
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">{formatDate(props.date)}</div>
  </div>
);

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
