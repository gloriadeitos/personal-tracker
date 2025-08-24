import { Stack } from 'tamagui'
import { getBackgroundUrl, getPetUrl } from '../utils/assets'

interface AnimatedBackgroundProps {
  background: string
  pet: string
}

const getAnimationStyle = (pet: string) => {
  const size = pet === 'clippy.gif' ? '40px auto' : 
               pet === 'shooting-star.gif' ? '100px auto' : '180px auto'
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
      
      @media (max-width: 768px) {
        .mobile-nyan-animation {
          background-size: 180px auto !important;
        }
        .mobile-star-animation {
          background-size: 120px auto !important;
        }
      }
      
      @media (max-width: 480px) {
        .mobile-nyan-animation {
          background-size: 160px auto !important;
        }
        .mobile-star-animation {
          background-size: 100px auto !important;
        }
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
        backgroundImage: `url('${getBackgroundUrl(background)}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    
    {/* Penguin no canto inferior esquerdo - responsivo */}
    {pet === 'penguin.gif' && (
      <Stack
        position="absolute"
        bottom={0}
        left={20}
        width={300}
        height={300}
        zIndex={1}
        style={{
          backgroundImage: `url('${getPetUrl(pet)}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left'
        }}
        $sm={{
          width: 250,
          height: 250,
          left: 10
        }}
        $xs={{
          width: 200,
          height: 200,
          left: 5
        }}
      />
    )}
    


    {/* Não mostrar fundo animado se for clippy ou penguin */}
    {pet !== 'clippy.gif' && pet !== 'penguin.gif' && (
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
          className={pet === 'nyan-cat.gif' ? 'mobile-nyan-animation' : 'mobile-star-animation'}
          style={{
            backgroundImage: `url('${getPetUrl(pet)}')`,
            backgroundRepeat: 'repeat',
            ...getAnimationStyle(pet)
          }}
        />
      </Stack>
    )}
  </>
)
