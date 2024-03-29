import {useState} from 'react'
import {puppyList} from './data.js'
import './App.css'
import './NewStyles.css'

function App() {
    const [featPupId, setFeatPupId] = useState(null);
    const [puppies, setPuppies] = useState(puppyList);
    console.log(puppies);
    console.log("Puppies List: ", puppyList);
    const featuredPup = puppies.find((pup)=>pup.id === featPupId)
    console.log(featuredPup);

    return (
        <>
        <div className="App">
        {featPupId && ( 
            <div className="puppyTitleName">
            <h2>{featuredPup.name}</h2>
            <ul className="listOfPuppies">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            </ul>
            </div>
        )}
        {
            puppies.map((puppy)=>{
                return <p className="puppy" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            })

        }
        </div>
        </>
    )
}

export default App
