import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Render a floating image for mobile devices
    if (isMobile) {
        return (
            <div className="floating-image-container">
                <img
                    src="/images/catHeroimage.png"
                    srcSet="/images/catHeroimage.png 480w, /images/catHeroimage.png 768w"
                    alt="Hero Mobile"
                    className="floating-image"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                />
            </div>
        );
    }

    // Render the 3D experience for larger screens
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <HeroLights />

            <OrbitControls
                enablePan={false}
                enableZoom={true}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={0.7} // Same scale as the 3D prop
                position={[0, -3.5, 0]} // Same position as the 3D prop
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    );
};

export default HeroExperience;
