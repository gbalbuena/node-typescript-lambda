import httpStatus from 'http-status';
import immutable from 'object-path-immutable';
import {
  successResponse
} from './httpResponses';

describe('HTTP Responses', () => {
  const expectation = {
    body: '{"test":1234}',
    headers: {
      'content-type': "application/json; charset=utf-8",
    },
    statusCode: httpStatus.OK
  };

  test('success', () => {
    expect(successResponse({ test: 1234 })).toEqual(expectation);
  });

  test('success CORS', () => {
    const corsExpectation = immutable(expectation)
      .set('headers.access-control-allow-origin', '*')
      .value();
    expect(successResponse({ test: 1234 }, true)).toEqual(corsExpectation);
  });
});
