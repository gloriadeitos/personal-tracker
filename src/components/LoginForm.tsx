import { useState } from 'react'
import { 
  Avatar, 
  Button, 
  Card, 
  Input, 
  Text, 
  YStack, 
  XStack, 
  Separator,
  Stack
} from 'tamagui'
import { User, Lock, Eye, EyeOff } from '@tamagui/lucide-icons'

interface LoginFormProps {
  currentPet: string
}

export const LoginForm = ({ currentPet }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login:', { email, password })
  }

  return (
    <Card 
      elevate 
      size="$6" 
      width={400} 
      maxWidth="90%" 
      padding="$6"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      borderRadius="$6"
      shadowColor="rgba(0, 0, 0, 0.1)"
      shadowOffset={{ width: 0, height: 20 }}
      shadowRadius={40}
      shadowOpacity={1}
      position="relative"
    >
      {/* Mostrar apenas clippy no canto */}
      {currentPet === 'clippy.gif' && (
        <Stack
          position="absolute"
          bottom={-25}
          right={-25}
          width={80}
          height={80}
          zIndex={5}
          style={{
            backgroundImage: `url('./pet/${currentPet}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      )}

      <YStack space="$4" alignItems="center">
        <Avatar circular size="$8" backgroundColor="$blue10">
          <Avatar.Image src="http://picsum.photos/200/300" />
          <Avatar.Fallback backgroundColor="$blue10">
            <User size="$2" color="white" />
          </Avatar.Fallback>
        </Avatar>

        <YStack space="$2" alignItems="center">
          <Text fontSize="$8" fontWeight="bold" color="$color">
            Bem-vindo de volta
          </Text>
          <Text fontSize="$4" color="$color11">
            Entre na sua conta para continuar
          </Text>
        </YStack>

        <YStack space="$3" width="100%">
          <YStack space="$2">
            <Text fontSize="$3" fontWeight="600" color="$color">Email</Text>
            <XStack 
              alignItems="center" 
              borderWidth={1} 
              borderColor="$borderColor" 
              borderRadius="$4"
              backgroundColor="$background"
              paddingHorizontal="$3"
            >
              <User size="$1" color="$color11" />
              <Input
                flex={1}
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="seu@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </XStack>
          </YStack>

          <YStack space="$2">
            <Text fontSize="$3" fontWeight="600" color="$color">Senha</Text>
            <XStack 
              alignItems="center" 
              borderWidth={1} 
              borderColor="$borderColor" 
              borderRadius="$4"
              backgroundColor="$background"
              paddingHorizontal="$3"
            >
              <Lock size="$1" color="$color11" />
              <Input
                flex={1}
                borderWidth={0}
                backgroundColor="transparent"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Button
                unstyled
                onPress={() => setShowPassword(!showPassword)}
                padding="$2"
              >
                {showPassword ? 
                  <EyeOff size="$1" color="$color11" /> : 
                  <Eye size="$1" color="$color11" />
                }
              </Button>
            </XStack>
          </YStack>

          <XStack justifyContent="flex-end">
            <Button variant="outlined" size="$2" chromeless>
              <Text fontSize="$3" color="$blue10">Esqueci minha senha</Text>
            </Button>
          </XStack>
        </YStack>

        <Button
          size="$4"
          width="100%"
          backgroundColor="$blue10"
          color="white"
          fontWeight="bold"
          onPress={handleLogin}
          pressStyle={{ backgroundColor: "$blue11" }}
        >
          Entrar
        </Button>

        <XStack alignItems="center" width="100%" space="$3">
          <Separator flex={1} />
          <Text fontSize="$3" color="$color11">ou</Text>
          <Separator flex={1} />
        </XStack>

        <Button
          size="$4"
          width="100%"
          variant="outlined"
          borderColor="$borderColor"
          backgroundColor="$background"
        >
          <Text color="$color">Continuar com Google</Text>
        </Button>

        <XStack space="$2" alignItems="center">
          <Text fontSize="$3" color="$color11">Não tem uma conta?</Text>
          <Button variant="outlined" size="$2" chromeless>
            <Text fontSize="$3" color="$blue10" fontWeight="bold">Cadastre-se</Text>
          </Button>
        </XStack>
      </YStack>
    </Card>
  )
}
