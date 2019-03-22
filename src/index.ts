import { APIGatewayProxyHandler } from 'aws-lambda';
import httpStatus from 'http-status';
import 'source-map-support/register';

import { successResponse } from './lib/httpResponses';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return successResponse({
    message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
    input: event,
  });
}
