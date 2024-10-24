
import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.cardStore}>
      <div className={css.catdProfile}>
        <img className={css.imgProfile} src={image} alt="User avatar" />
        <p className={css.nameProfile}>{name}</p>
        <p className={css.tagProfile}>{tag}</p>
        <p className={css.locationProfile}>{location}</p>
      </div>

      <ul className={css.listData}>
        <li className={css.itemList}>
          <span className={css.titleData}>Followers</span>
          <span className={css.itemData}>{stats.followers}</span>
        </li>
        <li className={css.itemList}>
          <span className={css.titleData}>Views</span>
          <span className={css.itemData}>{stats.views}</span>
        </li>
        <li className={css.itemList}>
          <span className={css.titleData}>Likes</span>
          <span className={css.itemData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
