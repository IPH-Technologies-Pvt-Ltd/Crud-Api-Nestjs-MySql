"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bookmark_entity_1 = require("./bookmark.entity");
const Repository_1 = require("typeorm/repository/Repository");
let BookmarksService = class BookmarksService {
    constructor(bookmarksRepository) {
        this.bookmarksRepository = bookmarksRepository;
    }
    async addBookmark(dto) {
        try {
            const bookmark = this.bookmarksRepository.create(dto);
            const createdBookmark = await this.bookmarksRepository.save(bookmark);
            return createdBookmark;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getBookmarks() {
        try {
            const bookmarks = this.bookmarksRepository.find();
            return await bookmarks;
        }
        catch (err) { }
    }
    async getBookmark(id) {
        try {
            const bookmark = await this.bookmarksRepository.findOneBy({ id: id });
            return bookmark;
        }
        catch (err) {
            throw err;
        }
    }
    async updateBookmark(id, newData) {
        const bookmark = await this.bookmarksRepository.findOneBy({ id: id });
        if (!bookmark) {
            throw new Error(`Bookmark with ID ${id} not found`);
        }
        Object.assign(bookmark, newData);
        await this.bookmarksRepository.save(bookmark);
        return bookmark;
    }
    async deleteBookmark(id) {
        const bookmark = await this.bookmarksRepository.findOneBy({ id: id });
        if (!bookmark) {
            throw new Error(`Bookmark with ID ${id} not found`);
        }
        await this.bookmarksRepository.remove(bookmark);
    }
};
BookmarksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bookmark_entity_1.Bookmarks)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], BookmarksService);
exports.BookmarksService = BookmarksService;
//# sourceMappingURL=bookmarks.service.js.map