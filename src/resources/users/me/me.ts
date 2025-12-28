// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../users';
import * as NotificationsAPI from './notifications';
import {
  NotificationGetUnreadCountResponse,
  NotificationListParams,
  NotificationListResponse,
  Notifications,
} from './notifications';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);

  /**
   * Get current user profile
   *
   * @example
   * ```ts
   * const userProfile = await client.users.me.getProfile();
   * ```
   */
  getProfile(options?: RequestOptions): APIPromise<UserProfile> {
    return this._client.get('/users/me', options);
  }
}

export interface UserProfile {
  grants?: UserProfile.Grants;

  proposals?: UserProfile.Proposals;

  staking?: UserProfile.Staking;

  user?: UsersAPI.User;

  voting?: UserProfile.Voting;
}

export namespace UserProfile {
  export interface Grants {
    approved?: number;

    submitted?: number;
  }

  export interface Proposals {
    created?: number;
  }

  export interface Staking {
    stakeCount?: number;

    /**
     * Amount in wei (smallest unit)
     */
    totalStaked?: string;

    /**
     * Human-readable amount in PAX
     */
    totalStakedFormatted?: string;
  }

  export interface Voting {
    againstVotes?: number;

    forVotes?: number;

    votesCast?: number;
  }
}

Me.Notifications = Notifications;

export declare namespace Me {
  export { type UserProfile as UserProfile };

  export {
    Notifications as Notifications,
    type NotificationListResponse as NotificationListResponse,
    type NotificationGetUnreadCountResponse as NotificationGetUnreadCountResponse,
    type NotificationListParams as NotificationListParams,
  };
}
