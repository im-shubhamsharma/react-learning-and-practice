import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

export default function App() {
    const jokeElements = jokesData.map( (val) => {
        return <Joke 
            Setup = {val.setup}
            Punchline = {val.punchline} 
        />
      })
   return (
   <div>
       {jokeElements}
   </div>
  );
}
