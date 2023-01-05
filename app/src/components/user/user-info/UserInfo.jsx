import React from "react";
import "./UserInfo.scss";

import avatar from '../../../assets/avatar.svg';

const UserInfo = ({user}) => {
    return(
        <article className="user-info">
            <img
                className="user-info__picture"
                src={user.photo == null
                    ? avatar
                    : user.photo}
                alt={user.name}
            />
            {/* TODO: add icons */}
            <div className="user-info__info">
                <span className="user-info__name">{user.name}</span>
                <span className="user-info__date">{user.created}</span>
                <span className="user-info__phone">{user.phone}</span>
                <span className="user-info__email">{user.email}</span>
            </div>
        </article>
    )
}

export default UserInfo;