import { APIGatewayProxyHandler } from 'aws-lambda';
import { successResponse } from './lib/httpResponses';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return successResponse({ status: 'ok' });
}
