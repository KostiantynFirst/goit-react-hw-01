import './App.css'
import userData from './userData.json'
import Profile from './components/Profile/Profile'

import FriendList from './components/FriendList/FriendList'
import friends from './friends.json'

import transactions from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'



function App() {

  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
