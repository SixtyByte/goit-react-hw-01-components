import Profile from './Profile/Profile'
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendsList } from './FriendList/FriendList';
import { Statistic } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ><Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
<Statistic title="Upload stats" stats={data}/>
<FriendsList friends={friends}/>
<TransactionHistory items={transactions}/>
    </div>
  );
};
