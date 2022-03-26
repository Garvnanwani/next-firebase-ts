import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'

type AuthContext = {
  user: User | null
  loading: boolean
}

const authContext = createContext<AuthContext>({} as AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log({ user })
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [user])

  return (
    <authContext.Provider value={{ user, loading }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

export default AuthProvider
