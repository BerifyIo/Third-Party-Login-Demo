import { NextApiRequest, NextApiResponse } from 'next';
import BerifyAppApi from '@bytexbyte/berify-app-open-api';

const berifyAppApi = new BerifyAppApi({
  host: 'https://sandbox-staging-app.berify.io',
  env: '',
  secretKey: 'App-Berify-Secret',
  secret: ''
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      const { tokenId } = req.query;
      if (typeof tokenId === 'string') {
        const userData = await berifyAppApi.auth.getUserData({ token: tokenId });
        console.log('get user data:', userData);
      }
      return res.redirect('http://localhost:3000');
    }
    default: {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
