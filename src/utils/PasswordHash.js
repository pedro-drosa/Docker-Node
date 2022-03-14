import bcrypt from 'bcrypt';

class PasswordHash {
  constructor(salt) {
    this.salt = salt | 10;
  }

  async generateHash(password) {
    return await bcrypt.hash(password, this.salt);
  }

  async compareHash(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

export default new PasswordHash();
