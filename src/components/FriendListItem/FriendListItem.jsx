import { ListItem, IsOnlineSpan } from './FriendListItem.styled';
import PropTypes, { shape } from 'prop-types';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <IsOnlineSpan isOnline={isOnline}></IsOnlineSpan>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
