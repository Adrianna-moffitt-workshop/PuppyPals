import {puppyList} from "./data";
import {useState} from "react";
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);


 const featuredPup = puppies.find((pup) => pup.id === featPupId);
 console.log(featuredPup);

  return (
    <div className="App">
      <div className="puppy-list">
        <h1>Puppy List:</h1>
        {puppies.map((puppy) => (
          <p
            onClick = {() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
            >
              {puppy.name}
            </p>
        ))}
      </div>

      {featPupId && (
        <div className="puppy-id">
          <h2>Puppy Info:</h2>
          <h3>{featuredPup.name}</h3>
          <ul>
            <li>
              <span>Age: {featuredPup.age} </span>
            </li>
            <li>
              <span>Email: {featuredPup.email}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
