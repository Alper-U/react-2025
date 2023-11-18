'use client'

import styles from './page.module.css'
import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth: any = useAuth();

  return (
    <main className={styles.main}>
      <h1>Fast Feedback </h1>
      <button onClick={() => auth.signInWithGithub()}>Sign In</button>
      <div>{auth?.user?.email}</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </main>
  )
}