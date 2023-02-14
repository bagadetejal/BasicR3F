import './style.css'
import { createRoot} from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
    <Canvas>
        <App/>
    </Canvas>
    </>
)