'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const HeroBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    
    const container = mountRef.current
    if (!container) return

    const updateSize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    
    renderer.setClearColor(0xfefbf6, 1)
    updateSize()
    
    container.appendChild(renderer.domElement)

    // Increased spread and size variation for spheres
    const spheres: THREE.Mesh[] = []
    const sphereCount = 7 // Added more spheres

    for (let i = 0; i < sphereCount; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? '#110043' : '#4B0082',
        transparent: true,
        opacity: 0.08, // Slightly reduced opacity
      })

      const sphere = new THREE.Mesh(geometry, material)
      
      // Increased spread range
      sphere.position.x = (Math.random() - 0.5) * 20  // Doubled spread
      sphere.position.y = (Math.random() - 0.5) * 16  // Increased vertical spread
      sphere.position.z = (Math.random() - 0.5) * 15  // Added more depth variation
      
      // Increased size variation
      const scale = Math.random() * 3 + 1.5  // Larger size range
      sphere.scale.set(scale, scale, scale)
      
      // Varied animation parameters
      sphere.userData = {
        originalY: sphere.position.y,
        speed: Math.random() * 0.0008 + 0.0004, // Slightly slower
        amplitude: Math.random() * 1 + 0.5, // Increased movement range
      }

      spheres.push(sphere)
      scene.add(sphere)
    }

    // Moved camera back to see more
    camera.position.z = 15

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }

    container.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      spheres.forEach((sphere) => {
        sphere.position.y = 
          sphere.userData.originalY + 
          Math.sin(Date.now() * sphere.userData.speed) * sphere.userData.amplitude

        // Slower rotation
        sphere.rotation.x += 0.0005
        sphere.rotation.y += 0.0005
      })

      // Reduced camera movement sensitivity
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      updateSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={mountRef}
      className="absolute inset-0 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom right, #FEFBF6, #F8F4FF)',
        pointerEvents: 'none' 
      }}
    />
  )
}

export default HeroBackground 