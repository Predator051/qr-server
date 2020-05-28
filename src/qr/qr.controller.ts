import {Controller, Get, Headers, Query} from '@nestjs/common';
import {QrService} from "./qr.service";
import {ItemManager} from '../db_services/ItemManager'
import {ItemTokenManager} from "../db_services/ItemTokenManager";

require('dotenv').config();

@Controller('qr')
export class QrController {
    constructor(private readonly QrService: QrService) {}

    @Get('getItem')
    async getItemById(@Query() query) {
        return JSON.stringify(await ItemManager.getItem(query.id));
    }

    @Get('getItemByToken')
    async getItemByToken(@Query() query) {

        console.log("getItemByToken. Query: " + JSON.stringify(query));
        // function makeid(length) {
        //     var result           = '';
        //     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //     var charactersLength = characters.length;
        //     for ( var i = 0; i < length; i++ ) {
        //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
        //     }
        //     return result;
        // }
        //
        // const item = await ItemManager.getItem(query.id);
        // const token: string = makeid(30);
        // console.log(item);
        //
        // const iToken = await ItemTokenManager.createItemToken(token, item);
        //
        // console.log("dsds");

        return JSON.stringify(await ItemTokenManager.getByToken(query.token));
    }
}
