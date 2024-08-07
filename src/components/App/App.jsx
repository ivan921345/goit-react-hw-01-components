import userProfileInfo from 'user.json';
import data from 'data.json';
import transactionsData from 'transactions.json';
import { Wrapper } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import friendsList from 'friends.json';
export const App = () => {
  return (
    <Wrapper
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userInfo={userProfileInfo} />
      <Statistics stats={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactionsData} />
    </Wrapper>
  );
};
