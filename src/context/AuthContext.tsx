// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('token').then((storedToken) => {
      setToken(storedToken)
      setIsLoading(false)
    })
  }, [])

  const login = async (newToken: string) => {
    await AsyncStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)