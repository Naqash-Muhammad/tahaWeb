import './App.css';
import Card from './Card';
import Cardtada from './Cardtada';
import Thor from './Thor';
import Iron from './Iron';

const FivMovies = "iron";


function App() {
   return(
    <>
    {Cardtada.map((val) => {
       return(
        <Card imagename={val.img} 
        heroname={val.sname}
        tiltea ={val.title}/> 
       );
    })}

    {(FivMovies === "iron") ? <Iron /> : <Thor />}
   </>
   )
}

export default App;
