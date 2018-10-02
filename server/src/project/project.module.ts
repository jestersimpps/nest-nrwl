import {DatabaseModule} from '../database.module';
import {ProjectController} from './project.controller';
import {ProjectProvider} from './project.provider';
import {ProjectService} from './project.service';
import {Module} from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [ProjectController],
    providers: [
        ProjectService,
        ...ProjectProvider,
    ],
})
export class ProjectModule {
}