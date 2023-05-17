import React from 'react'

export default function App(){
    return <>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshNormalMaterial color='red' wireframe/>
                </mesh>
                <mesh position={[2,Math.PI*0.25,0]} scale={1.5}>
                    <boxGeometry scale={1.5}/>
                    <meshNormalMaterial color='red' wireframe/>
                </mesh>
                <mesh position-x={2} position-y={Math.PI*0.25} scale={1}>
                    <planeGeometry />
                    <meshBasicMaterial color='green' wireframe/>
                </mesh>
            </>
}