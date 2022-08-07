"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const common_1 = require("@nestjs/common");
class ErrorHandler {
    notFound(type) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NOT_FOUND,
            error: `${type} not exist`,
        }, common_1.HttpStatus.NOT_FOUND);
    }
    notExist(type) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            error: `${type} not exist`,
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
    alreadyExist(type) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.CREATED,
            message: `${type}  already exist`,
        }, common_1.HttpStatus.CREATED);
    }
    badRequest() {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: `Bad request`,
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
    deleted(item) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.NO_CONTENT,
            message: `${item} has been deleted`,
        }, common_1.HttpStatus.NO_CONTENT);
    }
    notMatch() {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.FORBIDDEN,
            error: `Password id wrong`,
        }, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error.handler.js.map