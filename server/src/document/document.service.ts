import {Injectable} from '@nestjs/common';
import {Project} from '../models/project.model';
import {HistoricalChange} from "../models/historical-change.model";

@Injectable()
export class DocumentService {

    getTemplateById(id: number) {
        console.log(id);
        return [];
    }
    
    getDocumentByProjectId(id: number): string {
        console.log(id);
        return '';
    }

    setDocumentByprojectId(document: string, id: number) {
        console.log(id);
        return [];
    }

}
