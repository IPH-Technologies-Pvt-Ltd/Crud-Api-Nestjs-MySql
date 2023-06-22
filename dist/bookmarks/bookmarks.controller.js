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
exports.BookmarksController = void 0;
const common_1 = require("@nestjs/common");
const bookmarks_service_1 = require("./bookmarks.service");
const create_bookmarks_dto_1 = require("./dto/create-bookmarks.dto");
let BookmarksController = class BookmarksController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    async addBookmark(dto, res) {
        try {
            const bookmark = await this.bookmarkService.addBookmark(dto);
            res.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                bookmark,
                message: 'Bookmark created successfully',
            });
        }
        catch (error) {
            throw error;
        }
    }
    async getBookmarks(res) {
        try {
            const bookmarks = await this.bookmarkService.getBookmarks();
            res.json({
                statusCode: common_1.HttpStatus.OK,
                bookmarks,
            });
        }
        catch (err) {
            throw err;
        }
    }
    async getBookmark(id, res) {
        try {
            const bookmark = await this.bookmarkService.getBookmark(id);
            res.json({
                statusCode: common_1.HttpStatus.OK,
                bookmark
            });
        }
        catch (err) {
            throw err;
        }
    }
    async updateBookmark(dto, id, res) {
        try {
            const bookmark = await this.bookmarkService.updateBookmark(id, dto);
            res.json({
                statusCode: common_1.HttpStatus.OK,
                bookmark,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteBookmark(id, res) {
        const bookmarkId = parseInt(id, 10);
        await this.bookmarkService.deleteBookmark(bookmarkId);
        res.json({
            statusCode: common_1.HttpStatus.OK,
            message: "Bookmark deleted successfully"
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bookmarks_dto_1.CreateBookmarkDto, Object]),
    __metadata("design:returntype", Promise)
], BookmarksController.prototype, "addBookmark", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookmarksController.prototype, "getBookmarks", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookmarksController.prototype, "getBookmark", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bookmarks_dto_1.CreateBookmarkDto, Number, Object]),
    __metadata("design:returntype", Promise)
], BookmarksController.prototype, "updateBookmark", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookmarksController.prototype, "deleteBookmark", null);
BookmarksController = __decorate([
    (0, common_1.Controller)('bookmarks'),
    __metadata("design:paramtypes", [bookmarks_service_1.BookmarksService])
], BookmarksController);
exports.BookmarksController = BookmarksController;
//# sourceMappingURL=bookmarks.controller.js.map