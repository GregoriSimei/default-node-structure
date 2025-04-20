export interface IDataBaseConnector {
    connect(): Promise<boolean>
    isConnected(): boolean
    disconnect(): Promise<boolean>
}