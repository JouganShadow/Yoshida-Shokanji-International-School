/**
 * ============================================================================
 * WEBGL SHADER ANIMATION BACKGROUND (ui/shader-animation.tsx)
 * ============================================================================
 * Uses Three.js WebGL fragment shader to render a smooth, animated background
 * with maroon and slate/platinum geometric fluid lines.
 *
 * PROPS:
 * - className: Optional tailwind classes (e.g. "w-full h-full")
 * - speed: Animation time increment per frame (default: 0.03 or 0.08)
 * ============================================================================
 */

"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface ShaderAnimationProps {
  className?: string;
  speed?: number;
}

export function ShaderAnimation({ className = "w-full h-screen", speed = 0.03 }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader tuned for Slate Grey (#475569) with Maroon (#8B1538) Accents
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.04;
        float lineWidth = 0.0025;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            float offset = float(j) * 0.025 + float(i) * 0.012;
            color[j] += lineWidth * float(i * i + 1) / abs(fract(t - offset) * 4.5 - length(uv) + mod(uv.x + uv.y, 0.22));
          }
        }
        
        // Palette: Maroon + Neutral Grey + Platinum
        vec3 maroon       = vec3(0.55, 0.08, 0.22); // Maroon #8B1538
        vec3 neutralGrey  = vec3(0.45, 0.45, 0.45); // Pure Neutral Grey
        vec3 platinum     = vec3(0.88, 0.88, 0.88); // White/Light Grey

        vec3 finalColor = color.r * maroon + color.g * neutralGrey + color.b * platinum;
        
        // Soft vignette & subtle translucency
        float vignette = 1.0 - smoothstep(0.4, 1.4, length(uv));
        finalColor *= vignette;

        gl_FragColor = vec4(finalColor, 0.85);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      if (!container) return;
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation render loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += speed
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation loop
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        background: "transparent",
        overflow: "hidden",
      }}
    />
  )
}
