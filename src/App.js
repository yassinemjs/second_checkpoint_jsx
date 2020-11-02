import imageInSrc from './imageInSrc.jpg';
import './App.css';
import felicitation from "./felicitation.mp4";


function App() {
  return (
    <div className="App">
   <div className ="first" style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={imageInSrc} alt="imageInSrc" />  
    <br />
    <img width={700} height={572} src="/images/imageInPublic.jpg" alt="imageInPublic" />
 
  </div>
  
  <video style= {{padding : "50px"}} src={felicitation} width={320} height={240} controls="controls" autoplay="true">
  </video> 
  
  </div>
  );
}

export default App;
