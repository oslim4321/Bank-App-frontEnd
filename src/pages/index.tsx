import Head from 'next/head'
import Image from 'next/image'
import { UserContextProvider } from '../ContextApi/User'
import Homepgae from './Home/Homepgae'
import Homing from './Home/Homing'

export default function Home() {

  return (
    <UserContextProvider>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css" />
        </Head>

        <Homing />
        

      </div>
    </UserContextProvider>
  )
}
