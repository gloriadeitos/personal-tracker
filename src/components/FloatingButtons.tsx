import { Button, XStack } from 'tamagui'
import { Image, Cat } from '@tamagui/lucide-icons'

interface FloatingButtonsProps {
  onBackgroundChange: () => void
  onPetChange: () => void
}

export const FloatingButtons = ({ onBackgroundChange, onPetChange }: FloatingButtonsProps) => (
  <XStack position="absolute" top="$4" right="$4" zIndex={10} space="$2">
    <Button
      circular
      size="$4"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      borderColor="$borderColor"
      borderWidth={1}
      onPress={onBackgroundChange}
      pressStyle={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <Image size="$1.5" color="$color" />
    </Button>
    
    <Button
      circular
      size="$4"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      borderColor="$borderColor"
      borderWidth={1}
      onPress={onPetChange}
      pressStyle={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <Cat size="$1.5" color="$color" />
    </Button>
  </XStack>
)
