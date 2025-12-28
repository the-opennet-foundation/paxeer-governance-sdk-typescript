// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VotesAPI from './votes';
import { Vote, VoteListParams, VoteListResponse, VoteRetrieveParams, Votes } from './votes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proposals extends APIResource {
  votes: VotesAPI.Votes = new VotesAPI.Votes(this._client);

  /**
   * Get proposal by ID
   */
  retrieve(proposalID: string, options?: RequestOptions): APIPromise<ProposalRetrieveResponse> {
    return this._client.get(path`/proposals/${proposalID}`, options);
  }

  /**
   * Get all proposals
   */
  list(
    query: ProposalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProposalListResponse> {
    return this._client.get('/proposals', { query, ...options });
  }

  /**
   * Get proposal analytics
   */
  getAnalytics(proposalID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/proposals/${proposalID}/analytics`, options);
  }

  /**
   * Get proposal statistics
   */
  getStats(options?: RequestOptions): APIPromise<ProposalGetStatsResponse> {
    return this._client.get('/proposals/stats', options);
  }

  /**
   * Get active proposals
   */
  listActive(options?: RequestOptions): APIPromise<ProposalListActiveResponse> {
    return this._client.get('/proposals/active', options);
  }

  /**
   * Get proposal categories
   */
  listCategories(options?: RequestOptions): APIPromise<ProposalListCategoriesResponse> {
    return this._client.get('/proposals/categories', options);
  }

  /**
   * Sync proposal from blockchain
   */
  sync(proposalID: string, options?: RequestOptions): APIPromise<ProposalSyncResponse> {
    return this._client.post(path`/proposals/${proposalID}/sync`, options);
  }

  /**
   * Set proposal featured status
   */
  updateFeatured(
    proposalID: string,
    body: ProposalUpdateFeaturedParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/proposals/${proposalID}/featured`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Pagination {
  /**
   * Whether more items exist
   */
  hasMore?: boolean;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Current offset
   */
  offset?: number;

  /**
   * Total number of items
   */
  total?: number;
}

export interface ProposalSummary {
  /**
   * Amount in wei (smallest unit)
   */
  against_votes?: string;

  category?: string;

  created_at?: string;

  /**
   * Amount in wei (smallest unit)
   */
  for_votes?: string;

  proposal_id?: string;

  proposer_address?: string;

  state?: string;

  title?: string;
}

export interface ProposalRetrieveResponse {
  id?: string;

  /**
   * Amount in wei (smallest unit)
   */
  abstain_votes?: string;

  /**
   * Amount in wei (smallest unit)
   */
  against_votes?: string;

  calldatas?: Array<string>;

  category?: 'governance' | 'treasury' | 'grants' | 'technical' | 'community' | 'other';

  created_at?: string;

  description?: string;

  end_block?: number;

  /**
   * Amount in wei (smallest unit)
   */
  for_votes?: string;

  is_featured?: boolean;

  /**
   * On-chain proposal ID
   */
  proposal_id?: string;

  proposer_address?: string;

  /**
   * Amount in wei (smallest unit)
   */
  quorum_votes?: string;

  start_block?: number;

  state?: 'Pending' | 'Active' | 'Canceled' | 'Defeated' | 'Succeeded' | 'Queued' | 'Expired' | 'Executed';

  targets?: Array<string>;

  title?: string;

  values?: Array<string>;

  view_count?: number;
}

export interface ProposalListResponse {
  pagination?: Pagination;

  proposals?: Array<ProposalSummary>;
}

export type ProposalGetAnalyticsResponse = unknown;

export interface ProposalGetStatsResponse {
  avgParticipation?: number;

  byCategory?: { [key: string]: number };

  byState?: { [key: string]: number };

  passRate?: number;

  total?: number;
}

export type ProposalListActiveResponse = Array<ProposalSummary>;

export type ProposalListCategoriesResponse =
  Array<ProposalListCategoriesResponse.ProposalListCategoriesResponseItem>;

export namespace ProposalListCategoriesResponse {
  export interface ProposalListCategoriesResponseItem {
    category?: string;

    count?: number;
  }
}

export interface ProposalSyncResponse {
  message?: string;
}

export interface ProposalListParams {
  category?: string;

  featured?: boolean;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  proposer?: string;

  search?: string;

  sortBy?: 'created_at' | 'for_votes' | 'view_count';

  sortOrder?: 'asc' | 'desc';

  state?: 'Pending' | 'Active' | 'Canceled' | 'Defeated' | 'Succeeded' | 'Queued' | 'Expired' | 'Executed';
}

export interface ProposalUpdateFeaturedParams {
  featured?: boolean;
}

Proposals.Votes = Votes;

export declare namespace Proposals {
  export {
    type Pagination as Pagination,
    type ProposalSummary as ProposalSummary,
    type ProposalRetrieveResponse as ProposalRetrieveResponse,
    type ProposalListResponse as ProposalListResponse,
    type ProposalGetAnalyticsResponse as ProposalGetAnalyticsResponse,
    type ProposalGetStatsResponse as ProposalGetStatsResponse,
    type ProposalListActiveResponse as ProposalListActiveResponse,
    type ProposalListCategoriesResponse as ProposalListCategoriesResponse,
    type ProposalSyncResponse as ProposalSyncResponse,
    type ProposalListParams as ProposalListParams,
    type ProposalUpdateFeaturedParams as ProposalUpdateFeaturedParams,
  };

  export {
    Votes as Votes,
    type Vote as Vote,
    type VoteListResponse as VoteListResponse,
    type VoteRetrieveParams as VoteRetrieveParams,
    type VoteListParams as VoteListParams,
  };
}
