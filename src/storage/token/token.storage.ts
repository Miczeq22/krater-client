export class TokenStorage {
  private expiresAt = 0;

  private readonly localStorageKey = 'token';

  private token = localStorage.getItem(this.localStorageKey) || '';

  setAccessToken(token: string, exp: number) {
    this.expiresAt = exp;
    this.token = token;
    localStorage.setItem(this.localStorageKey, token);
  }

  getAccessToken() {
    return this.token;
  }

  resetAccessToken() {
    this.setAccessToken('', 0);
  }

  isTokenSet() {
    return this.token ? this.token.length > 0 : false;
  }

  hasAccessTokenExpired() {
    return this.expiresAt < Date.now() / 1000;
  }

  isTokenActive() {
    return this.isTokenSet() && !this.hasAccessTokenExpired();
  }
}

export const tokenStorage = new TokenStorage();
