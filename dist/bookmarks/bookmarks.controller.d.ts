import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmarks.dto';
import { Response } from 'express';
export declare class BookmarksController {
    private bookmarkService;
    constructor(bookmarkService: BookmarksService);
    addBookmark(dto: CreateBookmarkDto, res: Response): Promise<void>;
    getBookmarks(res: Response): Promise<void>;
    getBookmark(id: number, res: Response): Promise<void>;
    updateBookmark(dto: CreateBookmarkDto, id: number, res: Response): Promise<void>;
    deleteBookmark(id: string, res: Response): Promise<void>;
}
