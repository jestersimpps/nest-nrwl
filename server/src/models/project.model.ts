import {ApiModelProperty} from '@nestjs/swagger';

export class Project {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    address: string;
    @ApiModelProperty()
    author: string;
    @ApiModelProperty()
    buyer: string;
    @ApiModelProperty()
    seller: string;
    @ApiModelProperty()
    type: string;
    @ApiModelProperty()
    document: string;
    @ApiModelProperty()
    collaborators: string[];
}