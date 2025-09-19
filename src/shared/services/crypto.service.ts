import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { ENV } from 'src/config/env';

@Injectable()
export class CryptoService {
  constructor() {}
  async encryptHash(payload: object) {
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(ENV.SECRET_KEY, 'hex'),
      Buffer.alloc(16, 0),
    );
    let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  async decryptHash<T>(hash: string) {
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(ENV.SECRET_KEY, 'hex'),
      Buffer.alloc(16, 0),
    );
    let decrypted = decipher.update(hash, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted) as T;
  }
}
