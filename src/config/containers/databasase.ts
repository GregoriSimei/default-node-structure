import { IDataBaseConnector } from "@infra/persistence/IDataBaseConnector";
import { TypeOrmConnector } from "@infra/persistence/typeorm/typeorm-connector";
import { container } from "tsyringe";

container.registerInstance<IDataBaseConnector>('DataBaseConnector', TypeOrmConnector.getInstance())