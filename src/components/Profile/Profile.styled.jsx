import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  border-radius: 10px;
  padding: 20px 10px;
  background-color: #333;
`;

export const ProfileDescription = styled.div`
  p {
    color: ${props => props.theme.colors.white};
  }
  img {
    width: 200px;
  }
`;

export const StatsWrapper = styled.ul`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.lightPink};
`;

export const StatsWrapperitems = styled.li`
  font-size: 2rem;
`;
