import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {DocumentService} from './document.service';

@ApiUseTags('document')
@Controller('document')
export class DocumentController {

    constructor(private readonly documentService: DocumentService) {
    }

    @Get('template/:template_id')
    getTemplateById(@Param('id') id) {
        this.documentService.getTemplateById(id);
    }

    @Get('latest/:project_id')
    getDocumentByProjectId(@Param('id') id) {
        this.documentService.getDocumentByProjectId(id);
    }

    @Put(':project_id')
    setDocumentByprojectId(@Param('id') id, @Body() document: string) {
        this.documentService.setDocumentByprojectId(document, id);
    }
}
