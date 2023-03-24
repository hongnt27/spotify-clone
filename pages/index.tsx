import Center from '@/components/Center'
import Sidebar from '@/components/Sidebar'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify 2.0</title>
        <meta name='description' content='Spotify by Henry Web Dev'/>
        <Link rel='icon' href='favicon.ico'/>
      </Head>
      <main className='flex'>
        <Sidebar/>
        <Center/>
      </main>
    </div>
  )
}
