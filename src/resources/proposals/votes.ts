// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Votes extends APIResource {
  /**
   * Get user's vote on a proposal
   */
  retrieve(address: string, params: VoteRetrieveParams, options?: RequestOptions): APIPromise<Vote> {
    const { proposalId } = params;
    return this._client.get(path`/proposals/${proposalId}/votes/${address}`, options);
  }

  /**
   * Get votes for a proposal
   */
  list(
    proposalID: string,
    query: VoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoteListResponse> {
    return this._client.get(path`/proposals/${proposalID}/votes`, { query, ...options });
  }
}

export interface Vote {
  id?: string;

  created_at?: string;

  proposal_id?: string;

  reason?: string | null;

  /**
   * 0=Against, 1=For, 2=Abstain
   */
  support?: 0 | 1 | 2;

  tx_hash?: string;

  voter_address?: string;

  /**
   * Amount in wei (smallest unit)
   */
  voting_power?: string;

  /**
   * Human-readable amount in PAX
   */
  votingPowerFormatted?: string;
}

export type VoteListResponse = Array<Vote>;

export interface VoteRetrieveParams {
  /**
   * Proposal ID
   */
  proposalId: string;
}

export interface VoteListParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Filter by vote type
   */
  support?: 0 | 1 | 2;
}

export declare namespace Votes {
  export {
    type Vote as Vote,
    type VoteListResponse as VoteListResponse,
    type VoteRetrieveParams as VoteRetrieveParams,
    type VoteListParams as VoteListParams,
  };
}
