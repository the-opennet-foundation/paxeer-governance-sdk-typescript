// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Milestones extends APIResource {
  /**
   * Get grant milestones
   *
   * @example
   * ```ts
   * const milestones = await client.grants.milestones.list(0);
   * ```
   */
  list(grantID: number, options?: RequestOptions): APIPromise<MilestoneListResponse> {
    return this._client.get(path`/grants/${grantID}/milestones`, options);
  }

  /**
   * Submit milestone deliverable
   *
   * @example
   * ```ts
   * await client.grants.milestones.submit(0, { grantId: 0 });
   * ```
   */
  submit(milestoneIndex: number, params: MilestoneSubmitParams, options?: RequestOptions): APIPromise<void> {
    const { grantId, ...body } = params;
    return this._client.post(path`/grants/${grantId}/milestones/${milestoneIndex}/submit`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MilestoneListResponse = Array<MilestoneListResponse.MilestoneListResponseItem>;

export namespace MilestoneListResponse {
  export interface MilestoneListResponseItem {
    id?: string;

    /**
     * Amount in wei (smallest unit)
     */
    amount?: string;

    /**
     * Human-readable amount in PAX
     */
    amountFormatted?: string;

    deadline?: string;

    deliverable_ipfs_hash?: string | null;

    description?: string;

    grant_id?: number;

    milestone_index?: number;

    status?: 'Pending' | 'Submitted' | 'Approved' | 'Rejected' | 'Paid';

    title?: string;
  }
}

export interface MilestoneSubmitParams {
  /**
   * Path param: Grant ID
   */
  grantId: number;

  /**
   * Body param:
   */
  deliverableIpfsHash?: string;
}

export declare namespace Milestones {
  export {
    type MilestoneListResponse as MilestoneListResponse,
    type MilestoneSubmitParams as MilestoneSubmitParams,
  };
}
