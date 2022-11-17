import { AccumulativeShadows, Center, ContactShadows, RandomizedLight } from "@react-three/drei";
import Beetle from "@/components/Beetle";

export default function Scene() {

    return (
        <>
            <Center top>
                <Beetle
                // position={[0, -0.7, 0]}
                />
            </Center>

            <ContactShadows
                opacity={.4}
                blur={1.5}
            />

            {/* <AccumulativeShadows
                temporal
                frames={100}
                color="#dfd38f"
                colorBlend={2}
            // toneMapped={true}
            // alphaTest={0.9}
            // opacity={1}
            // scale={12}
            // resolution={1024}
            >
                <RandomizedLight
                    amount={8}
                    radius={4}
                    ambient={0.5}
                    intensity={1.3}
                    position={[5, 5, -10]}
                    bias={0.001} />
            </AccumulativeShadows> */}
        </>
    );
}