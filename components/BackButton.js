import NextLink from 'next/link';

function BackButton({ linkPath }) {
  return (
    <NextLink href={linkPath}>
      <button style={{padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
    </NextLink>
    
  )
}

export default BackButton;