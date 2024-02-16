import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

function SkyBox(props) {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.setPath(`/images/${props.scene}/`).load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
}
export default SkyBox;
