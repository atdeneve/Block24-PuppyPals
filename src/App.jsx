import { useState } from 'react'
import {puppyList} from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>;
          })
        }
       </div>
  );
}

