import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendUL}>
      {friends.map((friend) => {
        return (
          <li className={clsx(css.friendLi)} key={friend.id}>
            <img
              className={css.imgFriend}
              src={friend.avatar}
              alt={friend.name}
            />
            <p className={css.name}>{friend.name}</p>
            <p
              className={css.status}
              style={{ color: friend.isOnline ? "green" : "red" }}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
