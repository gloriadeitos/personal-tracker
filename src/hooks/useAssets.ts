import { useState } from 'react'

const PETS = ['clippy.gif', 'nyan-cat.gif', 'shooting-star.gif', 'penguin1.gif'].sort()
const BACKGROUNDS = ['jeremy-thomas-E0AHdsENmDg-unsplash.jpg', 'space-cat.jpg', 'windows.jpg', 'clubpenguin.webp'].sort()

export const useAssets = () => {
  // Encontrar os índices do nyan-cat e jeremy-thomas
  const nyanCatIndex = PETS.findIndex(pet => pet === 'nyan-cat.gif')
  const jeremyIndex = BACKGROUNDS.findIndex(bg => bg === 'jeremy-thomas-E0AHdsENmDg-unsplash.jpg')
  
  const [currentPetIndex, setCurrentPetIndex] = useState(nyanCatIndex)
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(jeremyIndex)

  const nextPet = () => setCurrentPetIndex(prev => (prev + 1) % PETS.length)
  const nextBackground = () => setCurrentBackgroundIndex(prev => (prev + 1) % BACKGROUNDS.length)

  return {
    currentPet: PETS[currentPetIndex],
    currentBackground: BACKGROUNDS[currentBackgroundIndex],
    nextPet,
    nextBackground
  }
}
