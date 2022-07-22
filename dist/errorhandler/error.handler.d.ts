export declare class ErrorHandler {
    notFound(type: string): void;
    notExist(type: string): void;
    alreadyExist(type: string): void;
    badRequest(): void;
    deleted(item: any): void;
    notMatch(): void;
}
