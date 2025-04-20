import { HttpError } from './HttpError'; // ajuste o path se necessário
import { EHttpStatusCode } from '../../protocols/EHttpStatusCode';

describe('HttpError', () => {
  it('should create an instance with status code, message, and additional info', () => {
    const message = 'Something went wrong';
    const statusCode = EHttpStatusCode.BAD_REQUEST;
    const additionalInfo = { reason: 'Invalid input' };

    const error = new HttpError(statusCode, message, additionalInfo);

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe(message);
    expect(error.getStatusCode()).toBe(statusCode);
    expect(error.additionalInfo).toEqual(additionalInfo);
  });

  it('should create an instance without additional info', () => {
    const message = 'Unauthorized access';
    const statusCode = EHttpStatusCode.UNAUTHORIZED;

    const error = new HttpError(statusCode, message);

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe(message);
    expect(error.getStatusCode()).toBe(statusCode);
    expect(error.additionalInfo).toBeUndefined();
  });
});
