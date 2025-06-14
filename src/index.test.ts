import { describe, it, expect } from 'vitest';
import { handler } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('Lambda Handler', () => {
  it('should return 200 with message when no body is provided', async () => {
    const event = {} as APIGatewayProxyEvent;
    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.message).toBe('Hello from Node.js 22 Lambda!');
    expect(body.timestamp).toBeDefined();
  });

  it('should return 200 with parsed body when body is provided', async () => {
    const testBody = { test: 'data' };
    const event = {
      body: JSON.stringify(testBody),
    } as APIGatewayProxyEvent;

    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.input).toEqual(testBody);
  });

  it('should return 500 when invalid JSON is provided', async () => {
    const event = {
      body: 'invalid-json',
    } as APIGatewayProxyEvent;

    const response = await handler(event);

    expect(response.statusCode).toBe(500);
    const body = JSON.parse(response.body);
    expect(body.message).toBe('Internal server error');
  });
}); 