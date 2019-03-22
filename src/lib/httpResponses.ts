import httpStatus from 'http-status';

/**
 * Generic response payload to be returned by a lambda function
 * please refer to {@link https://httpstatuses.com/ HTTP Status Codes}
 * as a reference documentation to produce new responses.
 *
 * @param {*} params
 */
function response({ json, statusCode, allowCORS = false }) {
  const res = {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(json)
  };

  if (allowCORS) {
    res.headers['access-control-allow-origin'] = '*';
  }

  return res;
}

// 1×× Informational

// 2×× Success

export function successResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.OK,
    allowCORS
  });
}

/**
 * 202 Accepted
 * @description The request has been accepted for processing, but the
 * processing has not been completed. The request might or might not
 * eventually be acted upon, as it might be disallowed when processing
 * actually takes place.
 *
 * @see response
 *
 * @param {*} json
 */
export function acceptedResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.ACCEPTED,
    allowCORS
  });
}

// 3×× Redirection

// 4×× Client Error

export function badRequestResponse(
  json: any = {
    errorCode: httpStatus[httpStatus.BAD_REQUEST],
    message: httpStatus[`${httpStatus.BAD_REQUEST}_MESSAGE`]
  },
  allowCORS? : boolean
) {
  return response({
    json,
    statusCode: httpStatus.BAD_REQUEST,
    allowCORS
  });
}

/**
 * 404 Not Found
 * @description The origin server did not find a current representation for the
 * target resource or is not willing to disclose that one exists.
 *
 * @see response
 *
 * @param {*} json
 */
export function notFoundResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.NOT_FOUND,
    allowCORS
  });
}

export function methodNotAllowedResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.METHOD_NOT_ALLOWED,
    allowCORS
  });
}

/**
 * 422 Unprocessable Entity
 *
 * The server understands the content type of the request entity, and the
 * syntax of the request entity is correct but was unable to process the
 * contained instructions.
 *
 * For example, this error condition may occur if an JSON request body contains
 * well-formed (i.e., syntactically correct), but semantically erroneous, JSON
 * instructions.
 *
 * @param {*} json
 */
export function unprocessableEntityResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    allowCORS
  });
}

// 5×× Server Error

/**
 * The server encountered an unexpected condition that prevented it from
 * fulfilling the request.
 *
 * @param {*} json
 */
export function errorResponse(json: any, allowCORS? : boolean) {
  return response({
    json,
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    allowCORS
  });
}
