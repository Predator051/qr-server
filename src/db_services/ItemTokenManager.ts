import {ItemEntity} from "../entity/ItemEntity";
import {SingleDBConnection} from "./ConnectionSingleton";
import {ItemTokenEntity} from "../entity/ItemTokenEntity";

export class ItemTokenManager {
    public static async createItemToken(token: string, item: ItemEntity): Promise<ItemTokenEntity> {

        const connection = (await SingleDBConnection.getInstance()).getConnection();

        const iToken = new ItemTokenEntity();
        iToken.token = token;
        iToken.item = item;

        return await connection.getRepository(ItemTokenEntity).save(iToken);
    }

    public static async getByToken(token: string): Promise<ItemTokenEntity> {
        const connection = (await SingleDBConnection.getInstance()).getConnection();
        return (await connection.getRepository(ItemTokenEntity).find(
            {
                relations: ["item"],
                where:
                    { token: token
                    }
            }
            ))[0];
    }
}