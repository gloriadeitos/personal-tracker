import { Stack } from 'tamagui'

interface AnimatedBackgroundProps {
  background: string
  pet: string
}

const getAnimationStyle = (pet: string) => {
  const size = pet === 'clippy.gif' ? '40px auto' : 
               pet === 'shooting-star.gif' ? '150px auto' : '150px auto'
  const animation = pet === 'shooting-star.gif' ? 
                    'starFlow 4s linear infinite' : 'nyanFlow 4s linear infinite'
  return { backgroundSize: size, animation }
}

export const AnimatedBackground = ({ background, pet }: AnimatedBackgroundProps) => (
  <>
    <style>{`
      @keyframes nyanFlow {
        0% { transform: rotate(-45deg) translateX(-150px); }
        100% { transform: rotate(-45deg) translateX(0); }
      }
      @keyframes starFlow {
        0% { transform: translateX(-150px); }
        100% { transform: translateX(0); }
      }
    `}</style>
    
    <Stack
      position="absolute"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      overflow="hidden"
      zIndex={0}
      style={{
        backgroundImage: `url('./background/${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    
    {/* Não mostrar fundo animado se for clippy */}
    {pet !== 'clippy.gif' && (
      <Stack
        position="absolute"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        overflow="hidden"
        zIndex={1}
      >
        <Stack
          width="300vw"
          height="300vh"
          position="absolute"
          top="-100vh"
          left="-100vw"
          style={{
            backgroundImage: `url('./pet/${pet}')`,
            backgroundRepeat: 'repeat',
            ...getAnimationStyle(pet)
          }}
        />
      </Stack>
    )}
  </>
)
