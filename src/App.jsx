import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import User from "./components/User"
import Container from "./components/Container"

function App() {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(null)
  const [userRepos, setUserRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username);
    setIsLoading(true)
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      setUserData(res)
      fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((res) => {
        setUserRepos(res)
      })
    })
    .finally(() => {
      setIsLoading(false)
    })
  }
  const onChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
      <Navbar />
      <Search submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      username={username}/>
      {isLoading && <Container>Loading...</Container>}
      {!isLoading && userData && userRepos && <User repos={userRepos} user={userData} />}
    </>
  )
}

export default App
