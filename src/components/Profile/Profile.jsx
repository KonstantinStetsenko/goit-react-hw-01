import React from 'react';
import clsx from "clsx";
import css from "./Profile.module.css"
export default function Profile({name, tag, location, image, stats}){
    return (<div className={clsx(css.cardStore) }>
        <div className={clsx(css.catdProfile)}>
            <img className={clsx(css.imgProfile) } src={image}
                alt="User avatar"
            />
            <p className={clsx(css.nameProfile)}>{name}</p>
            <p className={clsx(css.tagProfile)}>{tag}</p>
            <p className={clsx(css.locationProfile )}>{location}</p>
        </div>

        <ul className={ clsx(css.listData)}>
            <li className={clsx(css.itemList)}>
                <span className={clsx(css.titleData)}>Followers</span>
                <span className={clsx(css.itemData)}>{stats.followers}</span>
            </li>
            <li className={clsx(css.itemList)}>
                <span className={clsx(css.titleData)}>Views</span>
                <span className={clsx(css.itemData)}>{stats.views }</span>
            </li>
            <li className={clsx(css.itemList)}>
                <span className={clsx(css.titleData)}>Likes</span>
                <span className={clsx(css.itemData)}>{stats.likes }</span>
            </li>
        </ul>
    </div>
    );

}
