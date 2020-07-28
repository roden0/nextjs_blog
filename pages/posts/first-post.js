import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import {getJoke} from '../../lib/jokes'

export async function getServerSideProps(context) {
    let jokeComplete = ""
    const jokeData = await getJoke()

    console.log(jokeData)
    const {type} = jokeData
    if(type !== "twopart"){
        const {joke} = jokeData
        jokeComplete = joke
    }else{
        const {setup, delivery} = jokeData
        jokeComplete = `${setup}\n${delivery}`
    }
    return {
      props: {
        jokeComplete
      }
    }
  }

export default function FirstPost({jokeComplete}) {
  return (
    <Layout>
      <Head>
        <title>IT Jokes</title>
      </Head>
      <h1>IT Jokes</h1>
        <blockquote>
            {jokeComplete}
        </blockquote>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}