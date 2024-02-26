
import './App.css';
import Header from './components/header'; 
import Favorites from "./components/favorites"
import Anime from "./animations/animation1.json"
import Lottie from "lottie-react";
import Shelf from "./components/shelf"

 

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Favorites/>
    </div>
    <div>
      <Shelf/>
    </div>
    <div style={{
        position: "fixed",
        bottom: 0,
        right: 0
      }}>
        <Lottie animationData={Anime} loop={true} style={{  height:"150px", width:"140px"}} />
        </div>
       
   </>
  );
}

export default App;
