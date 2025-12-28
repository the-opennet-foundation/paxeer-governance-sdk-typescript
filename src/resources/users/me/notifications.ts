// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notifications extends APIResource {
  /**
   * Get user notifications
   *
   * @example
   * ```ts
   * const notifications =
   *   await client.users.me.notifications.list();
   * ```
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationListResponse> {
    return this._client.get('/users/me/notifications', { query, ...options });
  }

  /**
   * Get unread notification count
   *
   * @example
   * ```ts
   * const response =
   *   await client.users.me.notifications.getUnreadCount();
   * ```
   */
  getUnreadCount(options?: RequestOptions): APIPromise<NotificationGetUnreadCountResponse> {
    return this._client.get('/users/me/notifications/unread', options);
  }

  /**
   * Mark all notifications as read
   *
   * @example
   * ```ts
   * await client.users.me.notifications.markAllAsRead();
   * ```
   */
  markAllAsRead(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/users/me/notifications/read-all', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Mark notification as read
   *
   * @example
   * ```ts
   * await client.users.me.notifications.markAsRead(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  markAsRead(notificationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/users/me/notifications/${notificationID}/read`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type NotificationListResponse = Array<NotificationListResponse.NotificationListResponseItem>;

export namespace NotificationListResponse {
  export interface NotificationListResponseItem {
    id?: string;

    created_at?: string;

    data?: unknown;

    is_read?: boolean;

    message?: string;

    title?: string;

    type?: string;

    user_address?: string;
  }
}

export interface NotificationGetUnreadCountResponse {
  count?: number;
}

export interface NotificationListParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  unread?: boolean;
}

export declare namespace Notifications {
  export {
    type NotificationListResponse as NotificationListResponse,
    type NotificationGetUnreadCountResponse as NotificationGetUnreadCountResponse,
    type NotificationListParams as NotificationListParams,
  };
}
