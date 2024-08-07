import PropTypes, { shape } from 'prop-types';
import {
  ProfileWrapper,
  ProfileDescription,
  StatsWrapper,
  StatsWrapperitems,
} from './Profile.styled';
export const Profile = ({
  userInfo: {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats,
  },
}) => {
  return (
    <ProfileWrapper className="profile">
      <ProfileDescription className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </ProfileDescription>

      <StatsWrapper className="stats">
        <StatsWrapperitems>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsWrapperitems>
        <StatsWrapperitems>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsWrapperitems>
        <StatsWrapperitems>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsWrapperitems>
      </StatsWrapper>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
