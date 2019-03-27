import { APIGatewayProxyResult } from 'aws-lambda';
import httpStatus from 'http-status';
import immutable from 'object-path-immutable';

function response({ json = {}, statusCode = httpStatus.OK, allowCORS = false }): APIGatewayProxyResult {
  let result: APIGatewayProxyResult = {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(json)
  };
  if (allowCORS) {
    return immutable(result)
    .update('headers.access-control-allow-origin', () => allowCORS ? '*' : undefined)
    .value();
  }
  return result;
}

export function successResponse(json?: any, allowCORS? : boolean): APIGatewayProxyResult {
  return response({
    json,
    statusCode: httpStatus.OK,
    allowCORS
  });
}
