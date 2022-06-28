import Head from 'next/head'
import Header from '../components/header/Header'
import HeadImage from '../components/home/HeadImage'
import IconsSection from '../components/home/icons-section/IconsSection'
import ContextProvider from '../context/Context'


export default function Home() {


  return (
    <ContextProvider>
      <Head>
        <title>Einav's Project</title>
        <meta name="description" content="This is my web course project, hope you like it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="body">
        <HeadImage />
        <Header />
        <IconsSection />
      </main>

    </ContextProvider>
  )
}
