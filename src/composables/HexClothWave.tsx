import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HexClothWave = () => {
  const lineRef = useRef<THREE.LineSegments>(null);
  const pointRef = useRef<THREE.Points>(null);
  const blossomRef = useRef<THREE.Points>(null);
  const gridSize = 40;
  const spacing = 1.2;

  const { positions, indices } = useMemo(() => {
    const positions: number[] = [];
    const indices: number[] = [];

    const dx = spacing * Math.sqrt(3);
    const dy = spacing * 1.5;
    let index = 0;

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const offsetX = (y % 2 === 0 ? 0 : dx / 2);
        const posX = x * dx + offsetX - (gridSize * dx) / 2;
        const posZ = y * dy - (gridSize * dy) / 2;
        const posY = 0;

        positions.push(posX, posY, posZ);

        const getIndex = (xx: number, yy: number) => yy * gridSize + xx;
        if (x > 0) indices.push(index, getIndex(x - 1, y));
        if (y > 0) {
          indices.push(index, getIndex(x, y - 1));
          if (y % 2 === 0 && x > 0) {
            indices.push(index, getIndex(x - 1, y - 1));
          } else if (y % 2 !== 0 && x < gridSize - 1) {
            indices.push(index, getIndex(x + 1, y - 1));
          }
        }
        index++;
      }
    }

    return {
      positions: new Float32Array(positions),
      indices: new Uint16Array(indices),
    };
  }, []);

  const blossomCount = 300;
  const blossomPositions = useMemo(() => {
    const arr = new Float32Array(blossomCount * 3);
    for (let i = 0; i < blossomCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * gridSize * spacing * 2;
      arr[i * 3 + 1] = Math.random() * 15 + 10; // start higher
      arr[i * 3 + 2] = (Math.random() - 0.5) * gridSize * spacing * 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const pos = pointRef.current?.geometry.attributes.position.array as Float32Array;
    if (!pos) return;

    // Wave motion on hex points
    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i];
      const z = pos[i + 2];
      pos[i + 1] = Math.sin(x * 0.2 + z * 0.15 + time * 0.5) * 0.6;
    }
    pointRef.current.geometry.attributes.position.needsUpdate = true;

    const linePos = lineRef.current?.geometry.attributes.position.array as Float32Array;
    if (linePos) {
      for (let i = 0; i < indices.length; i += 2) {
        const a = indices[i] * 3;
        const b = indices[i + 1] * 3;
        const offset = (i / 2) * 6;

        linePos[offset] = pos[a];
        linePos[offset + 1] = pos[a + 1];
        linePos[offset + 2] = pos[a + 2];

        linePos[offset + 3] = pos[b];
        linePos[offset + 4] = pos[b + 1];
        linePos[offset + 5] = pos[b + 2];
      }
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Cherry blossom particle movement with gentle sway
    const blossoms = blossomRef.current?.geometry.attributes.position.array as Float32Array;
    if (blossoms) {
      for (let i = 0; i < blossoms.length; i += 3) {
        blossoms[i + 1] -= 0.02; // slower falling speed

        // horizontal sway (left-right)
        blossoms[i] += Math.sin(time * 1.5 + i) * 0.005;

        if (blossoms[i + 1] < 0) {
          blossoms[i + 1] = Math.random() * 15 + 10;
          blossoms[i] = (Math.random() - 0.5) * gridSize * spacing * 2;
          blossoms[i + 2] = (Math.random() - 0.5) * gridSize * spacing * 2;
        }
      }
      blossomRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* HEX POINTS */}
      <points ref={pointRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.25} color="#8ef2ff" />
      </points>

      {/* HEX LINES */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(indices.length * 3)}
            count={indices.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#55ffe0" linewidth={2} />
      </lineSegments>

      {/* CHERRY BLOSSOM PARTICLES */}
      <points ref={blossomRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={blossomPositions}
            count={blossomCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.5} color="#ffb7c5" transparent opacity={0.8} />
      </points>
    </>
  );
};

export default HexClothWave;
