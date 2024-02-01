import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {" "}
            {/* Container to occupy full viewport */}
            <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows style={{ width: "100%", height: "100%" }}>
                <Experience />
            </Canvas>
        </div>
    );
}

export default App;
