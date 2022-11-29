import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function BeetleSepareted(props) {
    const { scene, nodes, materials } = useGLTF('/model/beetle/beetle.gltf');

    const {
        // showBody,
        colorBody,
        // showBumper,
    } = useControls({
        // showBody: true,
        colorBody: '#5d8aa8',
        // showBumper: true,
    });

    // console.log(scene);
    // console.log(materials);

    return (
        <group
            {...props}
        >
            <group>
                <mesh
                    // TODO fazer bake de AO somente, cor deixar via código
                    // TODO separar porta?
                    geometry={nodes['Body_'].geometry}
                    material={nodes['Body_'].material}
                    material-map={null}
                    // material-aoMap={null}
                    // material={materials['1-Body']}
                    material-vertexColors={false}
                    material-color={colorBody}
                >
                </mesh>
                <mesh
                    geometry={nodes['Body_Extensions'].geometry}
                    material={nodes['Body_Extensions'].material}
                    // material={materials['2-Extensoes']}
                    material-vertexColors={false}
                >
                    {/* <meshStandardMaterial /> */}
                </mesh>
            </group>
            <group>
                <mesh
                    geometry={nodes['Body_Bumper_Under'].geometry}
                    material={nodes['Body_Bumper_Under'].material}
                    // material={materials['3-Body Under']}
                    material-vertexColors={false}
                >
                    {/* <meshStandardMaterial /> */}
                </mesh>
            </group>
            <group>
                <mesh
                    geometry={nodes['Glass_'].children[0].geometry}
                    material={nodes['Glass_'].children[0].material}
                    material-vertexColors={false}
                >
                    {/* <meshStandardMaterial /> */}
                </mesh>
                <mesh
                    geometry={nodes['Glass_'].children[1].geometry}
                    material={nodes['Glass_'].children[1].material}
                    material-vertexColors={false}
                >
                    {/* <meshStandardMaterial /> */}
                </mesh>
            </group>
            <mesh
                geometry={nodes['Interior_Upholstered'].geometry}
                material={nodes['Interior_Upholstered'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Interior_Acessorios'].geometry}
                material={nodes['Interior_Acessorios'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Exhaust_Suspensao'].geometry}
                material={nodes['Exhaust_Suspensao'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Engine'].geometry}
                material={nodes['Engine'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Tires_Ft'].geometry}
                material={nodes['Tires_Ft'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Tires_Bk'].geometry}
                material={nodes['Tires_Bk'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Wheels_Bk'].geometry}
                material={nodes['Wheels_Bk'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>
            <mesh
                geometry={nodes['Wheels_Ft'].geometry}
                material={nodes['Wheels_Ft'].material}
                material-vertexColors={false}
            >
                {/* <meshStandardMaterial /> */}
            </mesh>

            {/* <primitive
                object={scene}
            /> */}

        </group >
    );
}