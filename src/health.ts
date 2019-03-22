import { APIGatewayProxyHandler } from 'aws-lambda';
import httpStatus from 'http-status';
import 'source-map-support/register';

import { successResponse } from './lib/httpResponses';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return successResponse({ status: 'ok' });
}
