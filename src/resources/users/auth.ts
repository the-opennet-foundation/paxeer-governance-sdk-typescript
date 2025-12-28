// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Get authentication nonce
   *
   * @example
   * ```ts
   * const response = await client.users.auth.getNonce();
   * ```
   */
  getNonce(options?: RequestOptions): APIPromise<AuthGetNonceResponse> {
    return this._client.get('/users/auth/nonce', options);
  }

  /**
   * Authenticate with wallet signature
   *
   * @example
   * ```ts
   * const response = await client.users.auth.login({
   *   address: '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
   *   message: 'message',
   *   signature: 'signature',
   *   timestamp: 0,
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/users/auth/login', { body, ...options });
  }
}

export interface AuthGetNonceResponse {
  /**
   * Message to sign with wallet
   */
  message?: string;

  nonce?: string;
}

export interface AuthLoginResponse {
  /**
   * JWT token
   */
  token?: string;

  address?: string;

  expiresIn?: string;
}

export interface AuthLoginParams {
  address: string;

  /**
   * The nonce that was signed
   */
  message: string;

  /**
   * Wallet signature of the message
   */
  signature: string;

  /**
   * Unix timestamp when signature was created
   */
  timestamp: number;
}

export declare namespace Auth {
  export {
    type AuthGetNonceResponse as AuthGetNonceResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLoginParams as AuthLoginParams,
  };
}
