import NextLink from 'next/link';

function BackButton2({ linkPath }) {
  return (
    <NextLink href={linkPath}>
      <button style={{position: 'absolute', padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
    </NextLink>
  )
}

export default BackButton2;