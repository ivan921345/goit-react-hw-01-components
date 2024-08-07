import styled from '@emotion/styled';

export const ListItem = styled.li`
  list-style: none;
`;

export const IsOnlineSpan = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  background-color: ${props => {
    return props.isOnline ? props.theme.colors.green : props.theme.colors.red;
  }};
  };
`;
