import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';
import { Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../lib/article';

export default function Home() {
  return (
    <Layout title="Art Collection" className={styles.container}>
      <Head>
        <title>Art Collection</title>
      </Head>
      

      <main className={styles.main}>
        <h2 className={styles.title}>
          Crypto Art Collection
        </h2>
        <h3>Crypto art and NFTs that are near and dear to my heart...</h3>

        <ul className={styles.grid}>
          {products.map(product => {
            const { title, artist, description, image, artistLink, siteLink } = product;
            return (
              <NextLink  href={siteLink}>
              <li key={title} className={styles.card}>
                <Image maxWidth="100%" src={image} alt={title}/>
                <h3>{title}</h3>
                <h4>By: {artist}</h4>
                <Text>
                  {description}       
                </Text>
                <NextLink color="inherit" textDecor='none' href={siteLink}>
                    <Text color="teal" decoration="underline" cursor='pointer'> Expand...</Text> 
                </NextLink>   
              </li>
              </NextLink>
            )
          })}
        </ul>
      </main>
    </Layout>
  )
}
