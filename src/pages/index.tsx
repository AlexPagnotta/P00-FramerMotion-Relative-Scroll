import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'

import { styled } from '../../stitches.config'
import useParentElementScroll from '../hooks/useRelativeElementScroll'

const Homepage: NextPage = () => {
  const { ref, yScrollProgress } = useParentElementScroll([0, 15], {
    // startTrigger: 'top'
    topTriggerOffset: 400,
    // bottomTriggerOffset: 0,
  })

  // We use "useSpring" to give a "realistic" effect to our animation
  const yScrollProgressSpring = useSpring(yScrollProgress, {
    mass: 1,
    stiffness: 1000,
    damping: 100,
  })

  const circleScale = useMotionTemplate`scale(${yScrollProgressSpring},${yScrollProgressSpring})`

  return (
    <div>
      <Head>
        <title>Playground Base Template</title>
        <meta name='description' content='Playground Base Template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <MainContainer>
          <Header>
            <Title>Welcome to the Playground-00!</Title>
          </Header>

          <CircleMask
            style={{
              transform: circleScale,
            }}
          />

          <Body ref={ref}>
            <BodyContent>
              <BodyTitle>Wow, what a beatiful animation 😲</BodyTitle>
            </BodyContent>
          </Body>
        </MainContainer>
        <Footer>
          <FooterTitle>Bye! 👋</FooterTitle>
        </Footer>
      </main>
    </div>
  )
}

export default Homepage

const MainContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})

const BaseSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
})

const Header = styled(BaseSection, {
  height: '100vh',
})

const Body = styled(BaseSection, {
  backgroundColor: 'White',
  height: '800px',
})

const CircleMask = styled(motion.div, {
  position: 'absolute',
  width: '250px',
  height: '250px',
  top: 'calc(100vh + 200px)',
  left: '0',
  right: '0',
  margin: 'auto',
  backgroundColor: '$pink',
  borderRadius: '50%',
})

const BodyContent = styled('div', {
  position: 'relative',
})

const Title = styled('h1', {
  color: 'black',
  fontSize: '$xl',
})

const BodyTitle = styled(Title, {
  color: 'white',
})

const Footer = styled(BaseSection, {
  backgroundColor: 'Black',
  height: '100vh',
})

const FooterTitle = styled(Title, {
  color: 'white',
})
