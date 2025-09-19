export declare class CryptoService {
    constructor();
    encryptHash(payload: object): Promise<string>;
    decryptHash<T>(hash: string): Promise<T>;
}
