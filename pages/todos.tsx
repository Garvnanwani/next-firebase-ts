import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../src/context/AuthProvider'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase'

const Todos: NextPage = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const getTodos = async () => {
      const querySnapshot = await getDocs(collection(db, 'todos'))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
      })
    }

    getTodos()
  })

  return <div>Todos</div>
}

export default Todos
