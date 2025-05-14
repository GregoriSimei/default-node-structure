import { DataSource as TypeOrmDataSource } from 'typeorm';
import { typeOrmConnection } from './typeorm-connection';
import { Logger } from '@infra/utils/logger/Logger';
import { IDataBaseConnector } from '../IDataBaseConnector';

export class TypeOrmConnector implements IDataBaseConnector{
  private static instance: TypeOrmConnector;
  private typeOrmConnection: TypeOrmDataSource;

  private constructor() {
    this.typeOrmConnection = typeOrmConnection;
  }

  public static getInstance(): IDataBaseConnector {
    if (!TypeOrmConnector.instance) {
      TypeOrmConnector.instance = new TypeOrmConnector();
    }
    return TypeOrmConnector.instance;
  }

  public async connect(): Promise<boolean> {
    await this.typeOrmConnection.initialize()
        .then(() => {
            Logger.info({
                        message: '[DATABASE] - Connected'
                    })
        })
        .catch((error) => {
            Logger.error({
                message: '[DATABASE] - Connection failed',
                additionalInfo: { errorMessage: error.message }
            })
        });
    return this.typeOrmConnection.isInitialized;
  }

  public isConnected(): boolean {
    return this.typeOrmConnection.isInitialized;
  }

  public async disconnect(): Promise<boolean> {
    try {
      await this.typeOrmConnection.destroy();
      Logger.info({
        message: '[DATABASE] - Disconnected',
      });
    } catch (error: any) {
      Logger.error({
        message: '[DATABASE] - Disconnection failed',
        additionalInfo: { errorMessage: error.message },
      });
    }
    return !this.typeOrmConnection.isInitialized;
  }
}