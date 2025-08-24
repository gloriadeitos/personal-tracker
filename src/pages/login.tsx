import { Stack, Theme } from 'tamagui'
import { useAssets } from '../hooks/useAssets'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { FloatingButtons } from '../components/FloatingButtons'
import { LoginForm } from '../components/LoginForm'
import { getPetUrl } from '../utils/assets'

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
        $sm={{
          padding: "$2"
        }}
        $xs={{
          padding: "$1"
        }}
      >
        <LoginForm pet={currentPet} />
      </Stack>
      
      {/* Clippy para mobile - centralizado na parte inferior da página */}
      {currentPet === 'clippy.gif' && (
        <Stack
          position="absolute"
          bottom={20}
          left="50%"
          width={120}
          height={120}
          zIndex={20}
          display="flex"
          $gtSm={{
            display: "none"
          }}
          style={{
            backgroundImage: `url('${getPetUrl(currentPet)}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: 'translateX(-50%)'
          }}
        />
      )}
    </Theme>
  )
}

export default Login