import { motion } from 'framer-motion';
import Head from 'next/head';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden" 
    animate="enter" 
    exit="exit" 
    variants={variants} 
    transition={{ duration: 1.0, type: 'easeInOut' }} 
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Alvaro Luken </title>
          <link rel="icon" href="../images/bitcoin.png" />
        </Head>
      )}
      {children}
    </>
  </motion.article>
)

export default Layout;