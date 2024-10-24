import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img className={css.imgFriend} src={friend.avatar} alt={friend.name} />
      <p className={css.name}>{friend.name}</p>
      <p className={css.status} style={{ color: friend.isOnline ? "green" : "red" }}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
