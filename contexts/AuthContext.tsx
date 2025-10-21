'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'

interface User {
  id: string
  email: string
  role: 'vet' | 'admin'
  name: string
}

interface AuthContextType {
  user: User | null
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demo
const mockUsers = [
  {
    id: '1',
    email: 'vet@clinic.com',
    password: 'vet123',
    role: 'vet' as const,
    name: 'Dr. Smith'
  },
  {
    id: '2',
    email: 'admin@clinic.com',
    password: 'admin123',
    role: 'admin' as const,
    name: 'Admin User'
  }
]

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    console.log(`DEBUG:login:`, { email, password })
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (foundUser) {
      console.log(`DEBUG:user found:`, foundUser)
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      return { success: true }
    }

    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
