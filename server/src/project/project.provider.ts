import {Connection} from 'mongoose';
import {ProjectSchema} from './project.schema';

export const ProjectProvider = [
    {
        provide: 'ProjectModelToken',
        useFactory: (connection: Connection) => connection.model('Project', ProjectSchema),
        inject: ['DbConnectionToken'],
    },
];