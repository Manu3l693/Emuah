// app/_layout.tsx
import { Stack, Redirect, useSegments } from "expo-router";
import { AuthProvider, useAuth } from '../context/AuthContext'

function RootNavigation() {
  const { token, isLoading } = useAuth()
  const segments = useSegments()

  if (isLoading) return null

  const inAuthGroup = segments[0] === '(auth)'

  return (
    <>
      {!token && !inAuthGroup && <Redirect href="/(auth)/login" />}
      {token && inAuthGroup && <Redirect href="/(drawer)/landing" />}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(drawer)" />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
}