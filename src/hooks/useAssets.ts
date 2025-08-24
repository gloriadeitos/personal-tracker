import { useState } from 'react'

const PETS = ['clippy.gif', 'nyan-cat.gif', 'shooting-star.gif', 'penguin.gif'].sort()
const BACKGROUNDS = ['jeremy-thomas-E0AHdsENmDg-unsplash.jpg', 'space-cat.jpg', 'windows.jpg', 'clubpenguin.webp'].sort()

export const useAssets = () => {
  // Encontrar os índices do penguin e clubpenguin
  const penguinIndex = PETS.findIndex(pet => pet === 'penguin.gif')
  const clubpenguinIndex = BACKGROUNDS.findIndex(bg => bg === 'clubpenguin.webp')
  
  const [currentPetIndex, setCurrentPetIndex] = useState(penguinIndex)
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(clubpenguinIndex)

  const nextPet = () => setCurrentPetIndex(prev => (prev + 1) % PETS.length)
  const nextBackground = () => setCurrentBackgroundIndex(prev => (prev + 1) % BACKGROUNDS.length)

  return {
    currentPet: PETS[currentPetIndex],
    currentBackground: BACKGROUNDS[currentBackgroundIndex],
    nextPet,
    nextBackground
  }
}
