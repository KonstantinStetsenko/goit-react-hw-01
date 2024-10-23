
import React from 'react'
export default function Profile({name, tag, location, image, stats}){
    return (<div className="cardStore">
        <div className="catdProfile">
            <img className="img-profile" src={image}
                alt="User avatar"
            />
            <p className="name-profile">{name}</p>
            <p className="tagProfile">{tag}</p>
            <p className="location-profile">{location}</p>
        </div>

        <ul className="listData">
            <li className="item-list">
                <span className="titleData">Followers</span>
                <span className="itemData">{stats.followers}</span>
            </li>
            <li className="item-list">
                <span className="titleData">Views</span>
                <span className="itemData">{stats.views }</span>
            </li>
            <li className="item-list">
                <span className="titleData">Likes</span>
                <span className="itemData">{stats.likes }</span>
            </li>
        </ul>
    </div>
    );

}
