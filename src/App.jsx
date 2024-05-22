import './App.css'
import userData from './userData.json'
import Profile from './components/Profile/Profile'

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
    </>
  )
}

export default App
