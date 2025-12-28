// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthGetNonceResponse, AuthLoginParams, AuthLoginResponse } from './auth';
import * as MeAPI from './me/me';
import { Me, UserProfile } from './me/me';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);

  /**
   * Get user profile
   *
   * @example
   * ```ts
   * const userProfile = await client.users.getProfile(
   *   '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
   * );
   * ```
   */
  getProfile(address: string, options?: RequestOptions): APIPromise<MeAPI.UserProfile> {
    return this._client.get(path`/users/${address}`, options);
  }

  /**
   * Update user profile
   *
   * @example
   * ```ts
   * const user = await client.users.updateProfile(
   *   '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
   * );
   * ```
   */
  updateProfile(address: string, body: UserUpdateProfileParams, options?: RequestOptions): APIPromise<User> {
    return this._client.put(path`/users/${address}`, { body, ...options });
  }
}

export interface User {
  id?: string;

  address?: string;

  avatar_url?: string | null;

  bio?: string | null;

  created_at?: string;

  discord_handle?: string | null;

  display_name?: string | null;

  email?: string | null;

  ens_name?: string | null;

  is_delegate?: boolean;

  twitter_handle?: string | null;

  website_url?: string | null;
}

export interface UserUpdateProfileParams {
  avatarUrl?: string;

  bio?: string;

  discordHandle?: string;

  displayName?: string;

  email?: string;

  twitterHandle?: string;

  websiteUrl?: string;
}

Users.Auth = Auth;
Users.Me = Me;

export declare namespace Users {
  export { type User as User, type UserUpdateProfileParams as UserUpdateProfileParams };

  export {
    Auth as Auth,
    type AuthGetNonceResponse as AuthGetNonceResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLoginParams as AuthLoginParams,
  };

  export { Me as Me, type UserProfile as UserProfile };
}
