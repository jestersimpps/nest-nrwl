import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {ChangeService} from './change.service';
import {HistoricalChange} from '../models/historical-change.model';

@ApiUseTags('change')
@Controller('change')
export class ChangeController {

    constructor(private readonly changeService: ChangeService) {
    }

    @Post()
    create(@Body() change: HistoricalChange) {
        this.changeService.create(change);
    }

    @Get()
    findAll() {
        this.changeService.findAll();
    }

    @Put()
    change(@Body() change: HistoricalChange) {
        this.changeService.change(change);
    }
}
