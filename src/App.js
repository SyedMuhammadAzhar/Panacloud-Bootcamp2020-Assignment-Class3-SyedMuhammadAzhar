import './App.css';
import Hello from './Hello'
import Profile from './profile'

function App({name,location,age}) {
  return (
  
    <div>
      <Profile/>
      <div className="Container">
        <h1>Hello Everone This is  <strong>{name} and i'm {age} years old</strong></h1>
        <p>I'm from KPK province of  <strong>{location}</strong></p>
        <ul>
          Things That i want to learn
          <li>MERN STACK</li>
          <li>MERN STACK</li>
          <li>MERN STACK</li>
        </ul>
        
        <ol>
          When will I finish this course
          <li>5th July or even before</li>
          <li>5th July or even before</li>
          <li>5th July or even before</li>

        </ol>
      </div>

      <Hello myname={name}></Hello>
    </div>

   
   
  );
  
}

export default App;
