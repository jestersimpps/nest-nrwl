import {Document} from 'mongoose';

export interface ProjectInterface extends Document {
    readonly id: number;
    readonly address: string;
    readonly author: string;
    readonly buyer: string;
    readonly seller: string;
    readonly type: string;
    readonly document: string;
    readonly collaborators: string[];
}