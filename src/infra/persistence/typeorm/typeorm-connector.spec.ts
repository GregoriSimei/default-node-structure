
import { typeOrmConnection } from './typeorm-connection';
import { Logger } from '@infra/utils/logger/Logger';
import { TypeOrmConnector } from './typeorm-connector';

jest.mock('@infra/utils/logger/Logger', () => ({
  Logger: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('./typeorm-connection', () => {
    return {
      typeOrmConnection: {
        initialize: jest.fn(),
        destroy: jest.fn(),
        _isInitialized: false,
        get isInitialized() {
          return this._isInitialized;
        },
        set isInitialized(value: boolean) {
          this._isInitialized = value;
        }
      }
    };
  });

describe('TypeOrmConnector', () => {
  let connector: TypeOrmConnector;

  beforeEach(() => {
    jest.clearAllMocks();
    connector = TypeOrmConnector.getInstance() as TypeOrmConnector;
  });

  it('should return the same instance (singleton)', () => {
    const anotherInstance = TypeOrmConnector.getInstance();
    expect(connector).toBe(anotherInstance);
  });

  describe('connect()', () => {
    it('should initialize and return true when connection succeeds', async () => {
      (typeOrmConnection.initialize as jest.Mock).mockResolvedValue(undefined);
      (typeOrmConnection as any).isInitialized = true;

      const result = await connector.connect();

      expect(typeOrmConnection.initialize).toHaveBeenCalled();
      expect(Logger.info).toHaveBeenCalledWith({
        message: '[DATABASE] - Connected',
      });
      expect(result).toBe(true);
    });

    it('should log error and return false when initialization fails', async () => {
      const error = new Error('Connection error');
      (typeOrmConnection.initialize as jest.Mock).mockRejectedValue(error);
      (typeOrmConnection as any).isInitialized = false;

      const result = await connector.connect();

      expect(Logger.error).toHaveBeenCalledWith({
        message: '[DATABASE] - Connection failed',
        additionalInfo: { errorMessage: error.message },
      });
      expect(result).toBe(false);
    });
  });

  describe('disconnect()', () => {
    it('should destroy connection and return true when it succeeds', async () => {
      (typeOrmConnection.destroy as jest.Mock).mockResolvedValue(undefined);
      (typeOrmConnection as any).isInitialized = false;

      const result = await connector.disconnect();

      expect(typeOrmConnection.destroy).toHaveBeenCalled();
      expect(Logger.info).toHaveBeenCalledWith({
        message: '[DATABASE] - Disconnected',
      });
      expect(result).toBe(true);
    });

    it('should log error and return false when destroy fails', async () => {
      const error = new Error('Disconnection error');
      (typeOrmConnection.destroy as jest.Mock).mockRejectedValue(error);
      (typeOrmConnection as any).isInitialized = true;

      const result = await connector.disconnect();

      expect(Logger.error).toHaveBeenCalledWith({
        message: '[DATABASE] - Disconnection failed',
        additionalInfo: { errorMessage: error.message }
    });
      expect(result).toBe(false);
    });
  });

  describe('isConnected()', () => {
    it('should return true if connection is initialized', () => {
        (typeOrmConnection as any).isInitialized = true;
      expect(connector.isConnected()).toBe(true);
    });

    it('should return false if connection is not initialized', () => {
      (typeOrmConnection as any).isInitialized = false;
      expect(connector.isConnected()).toBe(false);
    });
  });
});