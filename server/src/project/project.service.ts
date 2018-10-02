import {Inject, Injectable} from '@nestjs/common';
import {Project} from '../models/project.model';
import {Model} from 'mongoose';
import {ProjectInterface} from './project.interface';

@Injectable()
export class ProjectService {

    constructor(
        @Inject('ProjectModelToken')
        private readonly projectModel: Model<ProjectInterface>,
    ) {
    }

    async create(project: Project) {
        const createdProject = new this.projectModel(project);
        return await createdProject.save();
    }

    async change(id: number, project: Project) {
        return await this.projectModel.findOneAndUpdate({project_id: id}, project).exec();
    }

    async findAll(): Promise<Project[]> {
        return await this.projectModel.find().exec();
    }

}
