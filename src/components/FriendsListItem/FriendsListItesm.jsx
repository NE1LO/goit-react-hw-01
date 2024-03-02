import css from "./friendsListItem.module.css";

export const FriendsListItem = ({ friends }) => {
  console.log(friends);

  return (
    <ul className={css.friendsList}>
      {friends.map((friend, index) => (
        <li className={css.friendsListItem} key={index}>
          <div className={css.friendBlock}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            {friend.isOnline ? (
              <p style={{ color: "green" }}>Online</p>
            ) : (
              <p style={{ color: "red" }}>Offline</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};