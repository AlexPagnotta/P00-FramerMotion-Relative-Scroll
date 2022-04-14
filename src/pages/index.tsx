import type { NextPage } from 'next'
import Head from 'next/head'

import { styled } from '../../stitches.config'

const Homepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playground Base Template</title>
        <meta name='description' content='Playground Base Template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeaderSection>
          <Title>Welcome to the playground base template!</Title>
        </HeaderSection>
        <BodySection>
          <Circle />
          <BodyTitle>Test</BodyTitle>
        </BodySection>
        <FooterSection></FooterSection>
      </main>
    </div>
  )
}

export default Homepage

const HeaderSection = styled('div', {
  backgroundColor: 'red',
  height: '100vh',
})

const BodySection = styled('div', {
  position: 'relative',
  backgroundColor: 'White',
  height: '100vh',
})

const Circle = styled('div', {
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '200px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'Purple',
  borderRadius: '50%',
})

const Title = styled('h1', {
  color: 'black',
})

const BodyTitle = styled(Title, {
  color: 'white',
})

const FooterSection = styled('div', {
  backgroundColor: 'Blue',
  height: '200vh',
})
