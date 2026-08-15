import * as THREE from "three";

export interface Vector4D {
    x: number;
    y: number;
    z: number;
    w: number;
}

export interface EdgePair {
    v1: number;
    v2: number;
}

/**
 * Generate 16 vertices of a 4D unit hypercube: (±1, ±1, ±1, ±1)
 */
export function generateTesseractVertices(size: number = 1.6): Vector4D[] {
    const vertices: Vector4D[] = [];
    for (let i = 0; i < 16; i++) {
        vertices.push({
            x: (i & 1 ? 1 : -1) * size,
            y: (i & 2 ? 1 : -1) * size,
            z: (i & 4 ? 1 : -1) * size,
            w: (i & 8 ? 1 : -1) * size,
        });
    }
    return vertices;
}

/**
 * Compute 32 edges connecting vertices that have Hamming distance = 1
 */
export function generateTesseractEdges(): EdgePair[] {
    const edges: EdgePair[] = [];
    for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
            // Check Hamming distance (number of bit differences)
            const diff = i ^ j;
            // Power of 2 means exactly 1 bit is different
            if ((diff & (diff - 1)) === 0) {
                edges.push({ v1: i, v2: j });
            }
        }
    }
    return edges;
}

/**
 * 4D Rotation in XW plane
 */
export function rotateXW(v: Vector4D, angle: number): Vector4D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x * cos - v.w * sin,
        y: v.y,
        z: v.z,
        w: v.x * sin + v.w * cos,
    };
}

/**
 * 4D Rotation in YW plane
 */
export function rotateYW(v: Vector4D, angle: number): Vector4D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x,
        y: v.y * cos - v.w * sin,
        z: v.z,
        w: v.y * sin + v.w * cos,
    };
}

/**
 * 4D Rotation in ZW plane
 */
export function rotateZW(v: Vector4D, angle: number): Vector4D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x,
        y: v.y,
        z: v.z * cos - v.w * sin,
        w: v.z * sin + v.w * cos,
    };
}

/**
 * 3D Rotation in XZ plane (traditional yaw)
 */
export function rotateXZ(v: Vector4D, angle: number): Vector4D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x * cos - v.z * sin,
        y: v.y,
        z: v.x * sin + v.z * cos,
        w: v.w,
    };
}

/**
 * 3D Rotation in YZ plane (traditional pitch)
 */
export function rotateYZ(v: Vector4D, angle: number): Vector4D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: v.x,
        y: v.y * cos - v.z * sin,
        z: v.y * sin + v.z * cos,
        w: v.w,
    };
}

/**
 * Perspective project 4D point to 3D space with animatable distanceW
 */
export function project4Dto3D(v: Vector4D, distanceW: number = 3.2): THREE.Vector3 {
    // Avoid division by zero with safe clamp
    const denom = Math.max(distanceW - v.w, 0.2);
    const scale = 2.4 / denom;
    return new THREE.Vector3(v.x * scale, v.y * scale, v.z * scale);
}
