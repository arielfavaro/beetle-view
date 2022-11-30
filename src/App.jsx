import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'
import '@/App.css'
import Loader from '@/components/Loader';
import Scene from '@/components/Scene';
import Credits from '@/components/Credits';

function App() {

  return (
    <div className="App">
      <Stats />
      <Canvas
        camera={{
          position: [8, 2.5, 8],
          fov: 25
        }}
        shadows
      >
        {/* <color attach="background" args={['#fffce8']} /> */}
        <Suspense fallback={<Loader />}>

          {/* <ambientLight intensity={.4} /> */}

          <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2.1}
            minDistance={3}
            maxDistance={10}
            enablePan={false}
            enableDamping={true}
          />

          <Scene />

          <Environment
            files="/environment/potsdamer_platz_1k.hdr"
          />

        </Suspense>
      </Canvas>

      <Credits />

    </div>
  )
}

export default App
