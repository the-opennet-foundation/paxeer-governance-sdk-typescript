// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProposalsAPI from './proposals/proposals';
import * as VotesAPI from './proposals/votes';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Delegates extends APIResource {
  /**
   * Create delegate profile
   */
  create(body: DelegateCreateParams, options?: RequestOptions): APIPromise<Delegate> {
    return this._client.post('/delegates', { body, ...options });
  }

  /**
   * Get delegate by address
   */
  retrieve(address: string, options?: RequestOptions): APIPromise<Delegate> {
    return this._client.get(path`/delegates/${address}`, options);
  }

  /**
   * Update delegate profile
   */
  update(address: string, body: DelegateUpdateParams, options?: RequestOptions): APIPromise<Delegate> {
    return this._client.put(path`/delegates/${address}`, { body, ...options });
  }

  /**
   * Get all delegates
   */
  list(
    query: DelegateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DelegateListResponse> {
    return this._client.get('/delegates', { query, ...options });
  }

  /**
   * Get delegators for a delegate
   */
  listDelegators(address: string, options?: RequestOptions): APIPromise<DelegateListDelegatorsResponse> {
    return this._client.get(path`/delegates/${address}/delegators`, options);
  }

  /**
   * Get top delegates by voting power
   */
  listTop(
    query: DelegateListTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DelegateListTopResponse> {
    return this._client.get('/delegates/top', { query, ...options });
  }

  /**
   * Get voting history for delegate
   */
  listVotes(
    address: string,
    query: DelegateListVotesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DelegateListVotesResponse> {
    return this._client.get(path`/delegates/${address}/votes`, { query, ...options });
  }

  /**
   * Get delegate statistics
   */
  retrieveStats(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/delegates/stats', options);
  }

  /**
   * Sync delegate from blockchain
   */
  sync(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/delegates/${address}/sync`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Delegate {
  id?: string;

  bio?: string;

  created_at?: string;

  delegate_address?: string;

  delegator_count?: number;

  is_active?: boolean;

  name?: string;

  proposals_created?: number;

  reputation_score?: number;

  social_links?: Delegate.SocialLinks;

  votes_cast?: number;

  /**
   * Amount in wei (smallest unit)
   */
  voting_power?: string;

  /**
   * Human-readable amount in PAX
   */
  votingPowerFormatted?: string;
}

export namespace Delegate {
  export interface SocialLinks {
    discord?: string;

    twitter?: string;

    website?: string;
  }
}

export interface DelegateProfile {
  name: string;

  bio?: string;

  ipfsProfileHash?: string;

  socialLinks?: unknown;
}

export interface DelegateListResponse {
  delegates?: Array<Delegate>;

  pagination?: ProposalsAPI.Pagination;
}

export type DelegateListDelegatorsResponse = Array<unknown>;

export type DelegateListTopResponse = Array<Delegate>;

export type DelegateListVotesResponse = Array<VotesAPI.Vote>;

export type DelegateRetrieveStatsResponse = unknown;

export interface DelegateCreateParams {
  name: string;

  bio?: string;

  ipfsProfileHash?: string;

  socialLinks?: unknown;
}

export interface DelegateUpdateParams {
  name: string;

  bio?: string;

  ipfsProfileHash?: string;

  socialLinks?: unknown;
}

export interface DelegateListParams {
  active?: boolean;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  search?: string;

  sortBy?: 'voting_power' | 'reputation_score' | 'votes_cast';

  sortOrder?: 'asc' | 'desc';
}

export interface DelegateListTopParams {
  limit?: number;
}

export interface DelegateListVotesParams {
  limit?: number;
}

export declare namespace Delegates {
  export {
    type Delegate as Delegate,
    type DelegateProfile as DelegateProfile,
    type DelegateListResponse as DelegateListResponse,
    type DelegateListDelegatorsResponse as DelegateListDelegatorsResponse,
    type DelegateListTopResponse as DelegateListTopResponse,
    type DelegateListVotesResponse as DelegateListVotesResponse,
    type DelegateRetrieveStatsResponse as DelegateRetrieveStatsResponse,
    type DelegateCreateParams as DelegateCreateParams,
    type DelegateUpdateParams as DelegateUpdateParams,
    type DelegateListParams as DelegateListParams,
    type DelegateListTopParams as DelegateListTopParams,
    type DelegateListVotesParams as DelegateListVotesParams,
  };
}
