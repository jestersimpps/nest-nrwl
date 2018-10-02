import { ApiModelProperty } from '@nestjs/swagger';

export class HistoricalChange{
    @ApiModelProperty()
    project_id: number;
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    author: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    date: Date;
}