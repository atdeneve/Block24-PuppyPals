import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (

      <div className="pupCard3">
        <h1>Welcome to Puppy Pals</h1>
        <div className="pupCard">
          {featPupId &&(
            <div className="pupList">
              <h2 className="pupame">{featuredPup.name}</h2>
                <ul>
                  <li>Age: {featuredPup.name}</li>
                  <li>Email: {featuredPup.email}</li>
                </ul>
            </div>
          )}
        {puppies.map((puppy) => {
            return (
              <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
                {puppy.name}
              </p>
            )
          })}
        </div>
       </div>
  );
}

export default App;

