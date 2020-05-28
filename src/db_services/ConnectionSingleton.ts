import {Connection, createConnection} from "typeorm";

export class SingleDBConnection {
    private static instance: SingleDBConnection;

    private connection: Connection;

    private constructor() { }

    public static async getInstance(): Promise<SingleDBConnection> {
        if (!SingleDBConnection.instance) {
            SingleDBConnection.instance = new SingleDBConnection();

            SingleDBConnection.instance.connection = await createConnection({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "user0",
                password: "user0",
                database: "userdb",
                entities: [
                    __dirname + "/../../build/entity/*.js",
                ],
                synchronize: true,
            })
        }

        return SingleDBConnection.instance;
    }
    public getConnection(): Connection {
        return SingleDBConnection.instance.connection;
    }
}