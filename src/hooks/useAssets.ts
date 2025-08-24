import { useState } from 'react'

const PETS = ['clippy.gif', 'nyan-cat.gif', 'shooting-star.gif'].sort()
const BACKGROUNDS = ['jeremy-thomas-E0AHdsENmDg-unsplash.jpg', 'space-cat.jpg'].sort()

export const useAssets = () => {
  const [currentPetIndex, setCurrentPetIndex] = useState(0)
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)

  const nextPet = () => setCurrentPetIndex(prev => (prev + 1) % PETS.length)
  const nextBackground = () => setCurrentBackgroundIndex(prev => (prev + 1) % BACKGROUNDS.length)

  return {
    currentPet: PETS[currentPetIndex],
    currentBackground: BACKGROUNDS[currentBackgroundIndex],
    nextPet,
    nextBackground
  }
}
