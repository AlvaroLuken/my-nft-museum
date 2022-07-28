import { Flex, Center, AspectRatio } from '@chakra-ui/react';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';
import { useState } from 'react';
import Magnifier from 'react-magnifier';
import BackButton2 from '../../components/BackButton2';

const UnitedNodesImage = () => {
  const [state, setState] = useState('image-front');

  function handleClick(newState) {
    setState(newState);
    return;
  }
  
  if(state=='image-front') {
    return (
      // Front Side of Image
      <Layout title="United Nodes of Bitcoin">
        <BackButton2 linkPath={'/pieces/UnitedNodes/'} />   
        <button style={{color: 'white', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '108px', padding: '16px'}} onClick={() => handleClick('video')}>AR Video</button>
        <button style={{color: 'white', cursor: 'pointer', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '46px', padding: '16px'}} onClick={() => handleClick('image-back')}>Back Side Image</button>
        <Flex justifyContent='space-around'>
          <Center>
          <div className={styles.imageContainer}>
            <Magnifier width='50vw' height='85vh' style={{ marginTop: '42px'}} src="https://cdn.shopify.com/s/files/1/0826/9235/products/IMG_3203_1920x.jpg?v=1602797122" className={styles.image} />
          </div>
          </Center>
        </Flex>
      </Layout>
    )
  } else if (state=='video') {
    return (
      // AR Video
      <Layout title="United Nodes of Bitcoin">
        <BackButton2 linkPath={'/pieces/UnitedNodes/'} />  
        <button style={{color: 'white', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '46px', padding: '16px'}} onClick={() => handleClick('image-front')}>Front Side Image</button>
        <button style={{color: 'white', cursor: 'pointer', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '108px', padding: '16px'}} onClick={() => handleClick('image-back')}>Back Side Image</button>
        <Flex justifyContent='space-around'>
          <Center>
            <div className={styles.imageContainer}>
              <AspectRatio ratio={1} style={{ marginTop: '21px'}}>
                <iframe
                  title='united-nodes-of-bitcoin-ar'
                  src='https://www.youtube.com/embed/JmbBsZhfOy0'
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </Center>
        </Flex>
      </Layout>
    )
  } else {
    return (
      // Back Side of Image
      <Layout title="United Nodes of Bitcoin">
        <BackButton2 linkPath={'/pieces/UnitedNodes/'} />  
        <button style={{color: 'white', cursor: 'pointer', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '46px', padding: '16px'}} onClick={() => handleClick('image-front')}>Front Side Image</button>
        <button style={{color: 'white', backgroundColor: '#6A6666', fontFamily: 'monospace', position: 'absolute', marginTop: '108px', padding: '16px'}} onClick={() => handleClick('video')}>AR Video</button>
        <Flex alignItems='center' justifyContent='center'>
          <div className={styles.imageContainer}>
            <Magnifier style={{ marginTop: '42px'}} width='50vw' height='85vh' src="https://cdn.shopify.com/s/files/1/0826/9235/products/IMG_3204_1024x.jpg?v=1602797122" className={styles.image} />
          </div>
        </Flex>
      </Layout>
    )
  }
}

export default UnitedNodesImage;
