import react, {useState, useEffect} from 'react'
import axios from "axios";

 
export default function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(false);
  const url = "https://randomuser.me/api/?results=10";
  useEffect(() => {
    setloading(true);
    axios
      .get(url)
      .then((data) => setUserData(data.data.results))
      .catch((err) => console.log(err))
      .finally(() => setloading(false))
  },[url]);
  if (userData){
    console.log(userData);
    return (
      userData.map(user => (
        <div style={{display: "flex", justifyContent: "center"}}><div style={{display: "flex", width: "30%", padding: "10px", border: "3px solid blue", marginBottom: "10px"}}>
          <div style={{paddingRight: "10px", borderRight: "1px solid blue"}}><img src={user["picture"]["large"]} /></div>
          <div style={{display: "grid", marginLeft: "30px", alignItems: "center"}}><div>{user["name"]["title"]} {user["name"]["first"]} {user["name"]["last"]}</div>
          <div>{user["email"]}</div>
          <div>{user["location"]["street"]["number"]}, {user["location"]["street"]["name"]}, {user["location"]["city"]}, {user["location"]["state"]}, {user["location"]["country"]}</div>
          </div>
        </div>
        </div>
      ))
    );
  }
  return (<></>);
}