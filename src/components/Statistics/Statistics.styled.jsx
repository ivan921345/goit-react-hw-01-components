import styled from '@emotion/styled';

export const StatisticsTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.darkGray};
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  list-style: none;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 900;
  padding: 20px 16px;
  color: ${props => props.theme.colors.pink};
  background-color: ${props => {
    return props.bgColor ? props.bgColor : props.theme.colors.darkGray;
  }};
  span {
    padding-right: 10px;
  }
`;
