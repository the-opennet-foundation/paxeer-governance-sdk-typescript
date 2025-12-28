// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MilestonesAPI from './milestones';
import { MilestoneListResponse, MilestoneSubmitParams, Milestones } from './milestones';
import * as ProposalsAPI from '../proposals/proposals';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Grants extends APIResource {
  milestones: MilestonesAPI.Milestones = new MilestonesAPI.Milestones(this._client);

  /**
   * Get grant by ID
   *
   * @example
   * ```ts
   * const grant = await client.grants.retrieve(0);
   * ```
   */
  retrieve(grantID: number, options?: RequestOptions): APIPromise<Grant> {
    return this._client.get(path`/grants/${grantID}`, options);
  }

  /**
   * Get all grants
   *
   * @example
   * ```ts
   * const grants = await client.grants.list();
   * ```
   */
  list(
    query: GrantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GrantListResponse> {
    return this._client.get('/grants', { query, ...options });
  }

  /**
   * Get grants by applicant
   *
   * @example
   * ```ts
   * const grants = await client.grants.getByApplicant(
   *   '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
   * );
   * ```
   */
  getByApplicant(address: string, options?: RequestOptions): APIPromise<GrantGetByApplicantResponse> {
    return this._client.get(path`/grants/applicant/${address}`, options);
  }

  /**
   * Get grant programs
   *
   * @example
   * ```ts
   * const response = await client.grants.getPrograms();
   * ```
   */
  getPrograms(
    query: GrantGetProgramsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GrantGetProgramsResponse> {
    return this._client.get('/grants/programs', { query, ...options });
  }

  /**
   * Get grant statistics
   *
   * @example
   * ```ts
   * const response = await client.grants.getStats();
   * ```
   */
  getStats(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/grants/stats', options);
  }

  /**
   * Submit grant application
   *
   * @example
   * ```ts
   * const grant = await client.grants.submit({
   *   description:
   *     'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *   milestones: [
   *     {
   *       amount: '90000000000000000000000000',
   *       deadline: '2019-12-27T18:11:19.117Z',
   *       title: 'title',
   *     },
   *   ],
   *   requestedAmount: '90000000000000000000000000',
   *   title: 'xxxxxxxxxx',
   * });
   * ```
   */
  submit(body: GrantSubmitParams, options?: RequestOptions): APIPromise<Grant> {
    return this._client.post('/grants', { body, ...options });
  }
}

export interface Grant {
  id?: string;

  applicant_address?: string;

  /**
   * Amount in wei (smallest unit)
   */
  approved_amount?: string;

  created_at?: string;

  description?: string;

  /**
   * Amount in wei (smallest unit)
   */
  disbursed_amount?: string;

  grant_id?: number;

  ipfs_hash?: string;

  program_id?: number;

  /**
   * Amount in wei (smallest unit)
   */
  requested_amount?: string;

  /**
   * Human-readable amount in PAX
   */
  requestedFormatted?: string;

  reviewer_address?: string;

  status?: 'Pending' | 'UnderReview' | 'Approved' | 'Rejected' | 'InProgress' | 'Completed' | 'Cancelled';

  title?: string;

  updated_at?: string;
}

export interface GrantListResponse {
  grants?: Array<Grant>;

  pagination?: ProposalsAPI.Pagination;
}

export type GrantGetByApplicantResponse = Array<Grant>;

export type GrantGetProgramsResponse = Array<GrantGetProgramsResponse.GrantGetProgramsResponseItem>;

export namespace GrantGetProgramsResponse {
  export interface GrantGetProgramsResponseItem {
    id?: string;

    application_deadline?: string;

    /**
     * Amount in wei (smallest unit)
     */
    budget?: string;

    /**
     * Human-readable amount in PAX
     */
    budgetFormatted?: string;

    description?: string;

    is_active?: boolean;

    name?: string;

    program_id?: number;

    /**
     * Amount in wei (smallest unit)
     */
    spent?: string;
  }
}

export type GrantGetStatsResponse = unknown;

export interface GrantListParams {
  applicant?: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  programId?: number;

  reviewer?: string;

  search?: string;

  sortBy?: string;

  sortOrder?: 'asc' | 'desc';

  status?: 'Pending' | 'UnderReview' | 'Approved' | 'Rejected' | 'InProgress' | 'Completed' | 'Cancelled';
}

export interface GrantGetProgramsParams {
  active?: boolean;
}

export interface GrantSubmitParams {
  description: string;

  milestones: Array<GrantSubmitParams.Milestone>;

  /**
   * Amount in wei (smallest unit)
   */
  requestedAmount: string;

  title: string;

  ipfsHash?: string;

  programId?: number;
}

export namespace GrantSubmitParams {
  export interface Milestone {
    /**
     * Amount in wei (smallest unit)
     */
    amount: string;

    deadline: string;

    title: string;

    description?: string;
  }
}

Grants.Milestones = Milestones;

export declare namespace Grants {
  export {
    type Grant as Grant,
    type GrantListResponse as GrantListResponse,
    type GrantGetByApplicantResponse as GrantGetByApplicantResponse,
    type GrantGetProgramsResponse as GrantGetProgramsResponse,
    type GrantGetStatsResponse as GrantGetStatsResponse,
    type GrantListParams as GrantListParams,
    type GrantGetProgramsParams as GrantGetProgramsParams,
    type GrantSubmitParams as GrantSubmitParams,
  };

  export {
    Milestones as Milestones,
    type MilestoneListResponse as MilestoneListResponse,
    type MilestoneSubmitParams as MilestoneSubmitParams,
  };
}
