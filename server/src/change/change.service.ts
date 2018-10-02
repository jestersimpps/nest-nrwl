import {Injectable} from '@nestjs/common';
import {Project} from '../models/project.model';
import {HistoricalChange} from "../models/historical-change.model";

@Injectable()
export class ChangeService {


    create(change: HistoricalChange) {
        console.log(change);
        return [];
    }

    change(change: HistoricalChange) {
        console.log(change);
        return [];
    }

    findAll(): HistoricalChange[] {
        return [];
    }
}
