import css from "./friendList.module.css";
import { FriendsListItem } from "../FriendsListItem/FriendsListItesm";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((item) => {
        return (
          <li className={css.FriendsListItem}>
            <FriendsListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
