import { gql, GraphQLClient } from 'graphql-request';

const baseUrl = process.env.WP_URL;

const client = new GraphQLClient(`${baseUrl}/marv`);