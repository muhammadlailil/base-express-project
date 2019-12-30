const crypto = require('crypto');
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

class AES {

    static encrypt(text,iv) {
        iv = Buffer.from(iv, 'hex');
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    static decrypt(text,iv,key) {
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(text);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }

}

module.exports = AES;
