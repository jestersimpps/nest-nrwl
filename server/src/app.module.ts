import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ChangeService} from './change/change.service';
import {ChangeController} from './change/change.controller';
import {DocumentController} from './document/document.controller';
import {DocumentService} from './document/document.service';
import {ProjectModule} from './project/project.module';

@Module({
    imports: [ProjectModule],
    controllers: [AppController, ChangeController, DocumentController],
    providers: [AppService, ChangeService, DocumentService],
})
export class AppModule {
}
