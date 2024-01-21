export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  return {
    props: {},
  };
}
