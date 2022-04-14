import type { NextPage } from 'next'
import Head from 'next/head'

const Homepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playground Base Template</title>
        <meta name='description' content='Playground Base Template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Welcome to the playground base template!</h1>
      </main>
    </div>
  )
}

export default Homepage
