import {Body, Controller, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {ApiUseTags, ApiResponse} from '@nestjs/swagger';
import {Project} from '../models/project.model';
import {ProjectService} from './project.service';

@ApiUseTags('project')
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService) {
    }

    @Post()
    create(@Body() project: Project) {
        this.projectService.create(project);
    }

    @Get()
    findAll() {
        this.projectService.findAll();
    }

    @Put(':id')
    change(@Param('id') id, @Body() project: Project) {
        this.projectService.change(id, project);
    }
}
