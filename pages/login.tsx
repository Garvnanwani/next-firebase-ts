import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../src/context/AuthProvider'
import { auth } from '../src/firebase'

const Login: NextPage = () => {
  const provider = new GithubAuthProvider()
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  })

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={login}>login with github</button>
    </div>
  )
}

export default Login
