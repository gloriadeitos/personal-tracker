import { Stack, Theme } from 'tamagui'
import { useAssets } from '../hooks/useAssets'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { FloatingButtons } from '../components/FloatingButtons'
import { LoginForm } from '../components/LoginForm'

const Login = () => {
  const { currentPet, currentBackground, nextPet, nextBackground } = useAssets()

  return (
    <Theme name="light">
      <FloatingButtons 
        onBackgroundChange={nextBackground}
        onPetChange={nextPet}
      />
      
      <AnimatedBackground 
        background={currentBackground}
        pet={currentPet}
      />

      <Stack 
        flex={1} 
        width="100vw"
        height="100vh"
        position="relative"
        zIndex={2}
        backgroundColor="rgba(0, 17, 34, 0.3)"
        alignItems="center" 
        justifyContent="center" 
        padding="$4"
      >
        <LoginForm currentPet={currentPet} />
      </Stack>
    </Theme>
  )
}

export default Login