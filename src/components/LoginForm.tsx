import { useState } from 'react'
import { 
  Button, 
  Card, 
  Input, 
  Text, 
  YStack, 
  XStack,
  Stack
} from 'tamagui'
import { User, Lock, Eye, EyeOff } from '@tamagui/lucide-icons'
import { getPetUrl } from '../utils/assets'

interface LoginFormProps {
  pet?: string
}

export const LoginForm = ({ pet }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login:', { email, password })
  }

  return (
    <Stack position="relative">
      <Card 
        elevate 
        size="$6" 
        width="100%"
        maxWidth={400}
        padding="$6"
        backgroundColor="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(10px)"
        borderRadius="$6"
        shadowColor="rgba(0, 0, 0, 0.1)"
        shadowOffset={{ width: 0, height: 20 }}
        shadowRadius={40}
        shadowOpacity={1}
        position="relative"
        marginHorizontal="$4"
        $sm={{
          padding: "$5",
          marginHorizontal: "$3",
          borderRadius: "$5",
          maxWidth: '88%'
        }}
        $xs={{
          padding: "$4",
          marginHorizontal: "$2",
          borderRadius: "$4",
          maxWidth: '92%'
        }}
      >
      <YStack space="$4" alignItems="center" $sm={{ space: "$3" }} $xs={{ space: "$2" }}>
        <YStack space="$3" alignItems="center" $sm={{ space: "$2.5" }} $xs={{ space: "$2" }}>
          <Text 
            fontSize="$9" 
            fontWeight="bold" 
            color="$blue10"
            textAlign="center"
            $sm={{ fontSize: "$9" }}
            $xs={{ fontSize: "$9" }}
          >
            Personal Tracker
          </Text>
          <YStack space="$2" alignItems="center" $sm={{ space: "$1.5" }} $xs={{ space: "$1" }}>
            <Text 
              fontSize="$6" 
              fontWeight="500" 
              color="$gray12" 
              letterSpacing={0.5}
              textAlign="center"
              $sm={{ fontSize: "$6" }}
              $xs={{ fontSize: "$6" }}
            >
              Bem-vindo de volta
            </Text>
            <Text 
              fontSize="$3" 
              color="$gray10" 
              textAlign="center" 
              opacity={0.8}
              paddingHorizontal="$2"
              $sm={{ fontSize: "$4" }}
              $xs={{ fontSize: "$4" }}
            >
              Entre na sua conta para continuar
            </Text>
          </YStack>
        </YStack>

        <YStack space="$4" width="100%" $sm={{ space: "$3" }} $xs={{ space: "$2.5" }}>
          <YStack space="$2" $sm={{ space: "$2" }} $xs={{ space: "$1.5" }}>
            <Text 
              fontSize="$3" 
              fontWeight="600" 
              color="$color"
              $sm={{ fontSize: "$4" }}
              $xs={{ fontSize: "$4" }}
            >
              Email
            </Text>
            <XStack 
              alignItems="center" 
              borderWidth={1} 
              borderColor="$borderColor" 
              borderRadius="$4"
              backgroundColor="$background"
              paddingHorizontal="$3"
              minHeight={48}
              $sm={{ 
                paddingHorizontal: "$3",
                minHeight: 48
              }}
              $xs={{
                paddingHorizontal: "$2.5",
                minHeight: 46
              }}
            >
              <User size="$1" color="$color11" $sm={{ size: "$1.25" }} $xs={{ size: "$1.25" }} />
              <Input
                flex={1}
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="seu@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                fontSize="$3"
                paddingHorizontal="$2"
                $sm={{ fontSize: "$4", paddingHorizontal: "$2" }}
                $xs={{ fontSize: "$4", paddingHorizontal: "$1.5" }}
              />
            </XStack>
          </YStack>

          <YStack space="$2" $sm={{ space: "$2" }} $xs={{ space: "$1.5" }}>
            <Text 
              fontSize="$3" 
              fontWeight="600" 
              color="$color"
              $sm={{ fontSize: "$4" }}
              $xs={{ fontSize: "$4" }}
            >
              Senha
            </Text>
            <XStack 
              alignItems="center" 
              borderWidth={1} 
              borderColor="$borderColor" 
              borderRadius="$4"
              backgroundColor="$background"
              paddingHorizontal="$3"
              minHeight={48}
              $sm={{ 
                paddingHorizontal: "$3",
                minHeight: 48
              }}
              $xs={{
                paddingHorizontal: "$2.5",
                minHeight: 46
              }}
            >
              <Lock size="$1" color="$color11" $sm={{ size: "$1.25" }} $xs={{ size: "$1.25" }} />
              <Input
                flex={1}
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                fontSize="$3"
                paddingHorizontal="$2"
                $sm={{ fontSize: "$4", paddingHorizontal: "$2" }}
                $xs={{ fontSize: "$4", paddingHorizontal: "$1.5" }}
              />
              <Button
                chromeless
                circular
                size="$2"
                onPress={() => setShowPassword(!showPassword)}
                backgroundColor="transparent"
                hoverStyle={{ backgroundColor: "$color3" }}
                pressStyle={{ backgroundColor: "$color4" }}
                $sm={{ size: "$1.5" }}
                $xs={{ size: "$1" }}
              >
                {showPassword ? 
                  <EyeOff size="$1" color="$color9" $xs={{ size: "$1" }} /> : 
                  <Eye size="$1" color="$color9" $xs={{ size: "$1" }} />
                }
              </Button>
            </XStack>
          </YStack>
        </YStack>

        <Button
          size="$4"
          width="100%"
          backgroundColor="$blue10"
          color="white"
          fontWeight="bold"
          onPress={handleLogin}
          pressStyle={{ backgroundColor: "$blue11" }}
          minHeight={48}
          $sm={{ 
            size: "$4",
            minHeight: 48
          }}
          $xs={{
            size: "$4",
            minHeight: 50
          }}
        >
          Entrar
        </Button>

      </YStack>
    </Card>
    
    {/* Clippy - desktop: canto inferior direito do formulário, mobile: centralizado na parte inferior da página */}
    {pet === 'clippy.gif' && (
      <Stack
        position="absolute"
        bottom={-60}
        right={-60}
        width={120}
        height={120}
        zIndex={10}
        display="none"
        $gtSm={{
          display: "flex"
        }}
        style={{
          backgroundImage: `url('${getPetUrl(pet)}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
    )}
    </Stack>
  )
}
