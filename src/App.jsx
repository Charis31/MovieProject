
import { useEffect, useState } from 'react'
import './App.css'



const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  })
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};



const App = () => {
  
  return (
    <div>
   <h2>Functional component</h2>
   <Card  title="Avatar"/>
   <Card title="League"/>
   <Card title="Justice"/>
   
   </div>
  )
}

export default App



