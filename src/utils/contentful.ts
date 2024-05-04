import * as contentful from 'contentful';

const client = contentful.createClient({
  space: String(process.env.NEXT_PUBLIC_SPACE_ID),
  accessToken: String(process.env.NEXT_PUBLIC_ACCESS_TOKEN),
});

export default client;