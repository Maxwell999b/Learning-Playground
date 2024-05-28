import React from "react";
import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "No Nick-Name Found", images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "75px" }} />
      <h3>{name}</h3>
      <p>{nickName}</p>
    </div>
  );
}
