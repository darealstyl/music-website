import React, { useRef, useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import OceanBackground from './components/OceanBackground';
import Skybox from './components/Sky';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import AudioPlayer from './components/AudioPlayer.jsx'
import tracks from './components/tracks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cloud from './components/Cloud';

function App() {

  
  const canvasRef = useRef(null);
  const [show, setShow] = useState(true);
  const [showOcean, setShowOcean] = useState(true);
  const handleLogoClick = () => {
    setShowOcean(!showOcean);
  };

  

  return (
    <>
    <div className='image-bg'>
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0 }}
      camera={{ position: [0, 30, 100], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <Cloud position={[0, 50, 0]} scale={1} /> */}
      {showOcean ? <group><OceanBackground/></group> : <Stars/>}<Skybox/>
      {/* <OrbitControls/> */}
    </Canvas>
    </div>
    <Header onLogoClick={handleLogoClick} style={{zIndex: '10000', position: 'fixed'}}/>
    <div className='container'>
      <Profile/>
    </div>
    

     <div className='text-container'>
      <AudioPlayer tracks={tracks} style={{zIndex: '10'}} />
     </div>

     
    </>
  );
}
export default App;
