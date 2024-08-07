import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes, { arrayOf, shape } from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};
FriendListItem.propTypes = {
  friends: arrayOf(
    shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
