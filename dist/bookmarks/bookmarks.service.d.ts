import { Bookmarks } from './bookmark.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateBookmarkDto } from './dto/create-bookmarks.dto';
export declare class BookmarksService {
    private readonly bookmarksRepository;
    constructor(bookmarksRepository: Repository<Bookmarks>);
    addBookmark(dto: CreateBookmarkDto): Promise<Bookmarks>;
    getBookmarks(): Promise<Bookmarks[]>;
    getBookmark(id: number): Promise<Bookmarks>;
    updateBookmark(id: number, newData: CreateBookmarkDto): Promise<Bookmarks>;
    deleteBookmark(id: number): Promise<void>;
}
