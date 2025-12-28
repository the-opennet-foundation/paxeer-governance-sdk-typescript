// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProposalsAPI from './proposals';
import { ProposalRetrieveMetricsResponse, Proposals as ProposalsAPIProposals } from './proposals';
import * as VotersAPI from './voters';
import {
  VoterRetrieveActivityResponse,
  VoterRetrieveTopParams,
  VoterRetrieveTopResponse,
  Voters,
} from './voters';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Analytics extends APIResource {
  voters: VotersAPI.Voters = new VotersAPI.Voters(this._client);
  proposals: ProposalsAPI.Proposals = new ProposalsAPI.Proposals(this._client);

  /**
   * Get dashboard statistics
   */
  retrieveDashboard(options?: RequestOptions): APIPromise<AnalyticsRetrieveDashboardResponse> {
    return this._client.get('/analytics/dashboard', options);
  }

  /**
   * Get historical metrics
   */
  retrieveHistory(
    query: AnalyticsRetrieveHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveHistoryResponse> {
    return this._client.get('/analytics/history', { query, ...options });
  }

  /**
   * Get participation rate data
   */
  retrieveParticipation(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/analytics/participation', options);
  }
}

export interface AnalyticsRetrieveDashboardResponse {
  delegates?: AnalyticsRetrieveDashboardResponse.Delegates;

  grants?: AnalyticsRetrieveDashboardResponse.Grants;

  proposals?: AnalyticsRetrieveDashboardResponse.Proposals;

  staking?: AnalyticsRetrieveDashboardResponse.Staking;

  treasury?: AnalyticsRetrieveDashboardResponse.Treasury;

  voting?: AnalyticsRetrieveDashboardResponse.Voting;
}

export namespace AnalyticsRetrieveDashboardResponse {
  export interface Delegates {
    active?: number;

    total?: number;
  }

  export interface Grants {
    active?: number;

    total?: number;

    /**
     * Amount in wei (smallest unit)
     */
    totalDisbursed?: string;

    /**
     * Human-readable amount in PAX
     */
    totalDisbursedFormatted?: string;
  }

  export interface Proposals {
    active?: number;

    executed?: number;

    total?: number;
  }

  export interface Staking {
    /**
     * Amount in wei (smallest unit)
     */
    totalStaked?: string;

    /**
     * Human-readable amount in PAX
     */
    totalStakedFormatted?: string;

    totalStakers?: number;
  }

  export interface Treasury {
    /**
     * Amount in wei (smallest unit)
     */
    balance?: string;

    /**
     * Human-readable amount in PAX
     */
    balanceFormatted?: string;
  }

  export interface Voting {
    totalVotes?: number;

    uniqueVoters?: number;
  }
}

export type AnalyticsRetrieveHistoryResponse =
  Array<AnalyticsRetrieveHistoryResponse.AnalyticsRetrieveHistoryResponseItem>;

export namespace AnalyticsRetrieveHistoryResponse {
  export interface AnalyticsRetrieveHistoryResponseItem {
    active_proposals?: number;

    date?: string;

    /**
     * Amount in wei (smallest unit)
     */
    total_staked?: string;

    /**
     * Amount in wei (smallest unit)
     */
    treasury_balance?: string;

    unique_stakers?: number;

    votes_cast?: number;
  }
}

export type AnalyticsRetrieveParticipationResponse = unknown;

export interface AnalyticsRetrieveHistoryParams {
  days?: number;
}

Analytics.Voters = Voters;
Analytics.Proposals = ProposalsAPIProposals;

export declare namespace Analytics {
  export {
    type AnalyticsRetrieveDashboardResponse as AnalyticsRetrieveDashboardResponse,
    type AnalyticsRetrieveHistoryResponse as AnalyticsRetrieveHistoryResponse,
    type AnalyticsRetrieveParticipationResponse as AnalyticsRetrieveParticipationResponse,
    type AnalyticsRetrieveHistoryParams as AnalyticsRetrieveHistoryParams,
  };

  export {
    Voters as Voters,
    type VoterRetrieveActivityResponse as VoterRetrieveActivityResponse,
    type VoterRetrieveTopResponse as VoterRetrieveTopResponse,
    type VoterRetrieveTopParams as VoterRetrieveTopParams,
  };

  export {
    ProposalsAPIProposals as Proposals,
    type ProposalRetrieveMetricsResponse as ProposalRetrieveMetricsResponse,
  };
}
