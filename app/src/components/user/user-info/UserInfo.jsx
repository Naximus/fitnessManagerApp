import React from "react";
import "./UserInfo.scss";

const UserInfo = ({user}) => {
    return(
        <div className="user-info">
            <span className="user-info__name">{user.name}</span>
            <span className="user-info__date">{user.created}</span>
            <span className="user-info__phone">{user.phone}</span>
            <span className="user-info__email">{user.email}</span>
        </div>
    )
}

export default UserInfo;