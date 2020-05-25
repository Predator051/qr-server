import {Controller, Get} from '@nestjs/common';
import {QrService} from "./qr.service";

@Controller('qr')
export class QrController {
    constructor(private readonly QrService: QrService) {}

    @Get('index')
    getHello(): string {
        return 'QR Service';
    }
}
