import { Canvas ,useFrame} from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useRef } from "react";


function CricketBallModel(){
    const {scene} = useGLTF("./models/baseball_01_2k.gltf");
    const ballRef = useRef();

    // Rotate the ball on every frame
  useFrame(() => {
    if (ballRef.current) {
      ballRef.current.rotation.y += 0.005; // Adjust this value for speed of rotation
      ballRef.current.rotation.x += 0.005;
      ballRef.current.rotation.z += 0.005;
    }
  });
    return(
        <primitive ref={ballRef} object={scene} scale={100 / 2} />
    )
}


const CricketBall = () => {
  return (
      <Canvas >
        <ambientLight intensity={1.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <CricketBallModel />
        <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default CricketBall
