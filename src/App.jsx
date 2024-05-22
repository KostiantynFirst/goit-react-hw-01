import './App.css'
import userData from './userData.json'
import Profile from './components/Profile/Profile'

import FriendList from './components/FriendList/FriendList'
import friends from './friends.json'



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
    </>
  )
}

export default App
