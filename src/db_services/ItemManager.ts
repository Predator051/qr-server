import {ItemEntity} from "../entity/ItemEntity";
import {SingleDBConnection} from "./ConnectionSingleton";

export class ItemManager {
    public static async createItem(name: string): Promise<ItemEntity> {
        const item = new ItemEntity();
        item.name = name;

        const connection = (await SingleDBConnection.getInstance()).getConnection();
        return await connection.getRepository(ItemEntity).save(item);
    }

    public static async getItem(id: number): Promise<ItemEntity> {
        const connection = (await SingleDBConnection.getInstance()).getConnection();
        return await connection.getRepository(ItemEntity).findOne(id);
    }
}

