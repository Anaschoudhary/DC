import { GraphQLClient } from 'graphql-request';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { query } = req.body;

  const username = process.env.WP_USER;
  const password = process.env.WP_APP_PASSWORD;
  const endpoint = 'https://srdevtest1.wpenginepowered.com/graphql'; // Added /graphql

  // Properly encode Basic Auth credentials
  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  try {
    const data = await graphQLClient.request(query);
    return res.status(200).json(data);
  } catch (error) {
    console.error('GraphQL Request Error:', error);
    return res.status(500).json({
      error: error.response?.errors || 'Internal server error',
    });
  }
}