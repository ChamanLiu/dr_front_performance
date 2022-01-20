import { BookType } from 'xlsx/types';

export interface exportParamsType {
    header: Array<string>;
    data: Array<unknown>;
    filename: string;
    autoWidth?: boolean;
    bookType?: BookType;
}
