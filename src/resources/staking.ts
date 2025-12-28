// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Staking extends APIResource {
  /**
   * Calculate early unstake penalty
   */
  calculateEarlyUnstakePenalty(
    address: string,
    query: StakingCalculateEarlyUnstakePenaltyParams,
    options?: RequestOptions,
  ): APIPromise<StakingCalculateEarlyUnstakePenaltyResponse> {
    return this._client.get(path`/staking/${address}/penalty`, { query, ...options });
  }

  /**
   * Get stake history for address
   */
  retrieveStakeHistory(
    address: string,
    query: StakingRetrieveStakeHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingRetrieveStakeHistoryResponse> {
    return this._client.get(path`/staking/${address}/history`, { query, ...options });
  }

  /**
   * Get stake info for address
   */
  retrieveStakeInfo(address: string, options?: RequestOptions): APIPromise<StakingRetrieveStakeInfoResponse> {
    return this._client.get(path`/staking/${address}`, options);
  }

  /**
   * Get staking statistics
   */
  retrieveStats(options?: RequestOptions): APIPromise<StakingRetrieveStatsResponse> {
    return this._client.get('/staking/stats', options);
  }

  /**
   * Get top stakers
   */
  retrieveTopStakers(
    query: StakingRetrieveTopStakersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingRetrieveTopStakersResponse> {
    return this._client.get('/staking/top', { query, ...options });
  }

  /**
   * Get total staked amount
   */
  retrieveTotal(options?: RequestOptions): APIPromise<StakingRetrieveTotalResponse> {
    return this._client.get('/staking/total', options);
  }

  /**
   * Get unstake history for address
   */
  retrieveUnstakeHistory(
    address: string,
    query: StakingRetrieveUnstakeHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingRetrieveUnstakeHistoryResponse> {
    return this._client.get(path`/staking/${address}/unstakes`, { query, ...options });
  }

  /**
   * Get voting power for address
   */
  retrieveVotingPower(
    address: string,
    query: StakingRetrieveVotingPowerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StakingRetrieveVotingPowerResponse> {
    return this._client.get(path`/staking/${address}/voting-power`, { query, ...options });
  }
}

export interface StakingCalculateEarlyUnstakePenaltyResponse {
  /**
   * Amount in wei (smallest unit)
   */
  penalty?: string;

  /**
   * Human-readable amount in PAX
   */
  penaltyFormatted?: string;

  /**
   * Amount in wei (smallest unit)
   */
  received?: string;
}

export type StakingRetrieveStakeHistoryResponse = Array<unknown>;

export interface StakingRetrieveStakeInfoResponse {
  address?: string;

  /**
   * Amount in wei (smallest unit)
   */
  amount?: string;

  /**
   * Human-readable amount in PAX
   */
  amountFormatted?: string;

  delegate?: string;

  isLocked?: boolean;

  /**
   * Unix timestamp in seconds
   */
  lockEndTime?: number;

  /**
   * Unix timestamp in seconds
   */
  stakedAt?: number;

  /**
   * Amount in wei (smallest unit)
   */
  votingPower?: string;

  /**
   * Human-readable amount in PAX
   */
  votingPowerFormatted?: string;
}

export interface StakingRetrieveStatsResponse {
  /**
   * Amount in wei (smallest unit)
   */
  totalPenalties?: string;

  /**
   * Amount in wei (smallest unit)
   */
  totalStaked?: string;

  /**
   * Human-readable amount in PAX
   */
  totalStakedFormatted?: string;

  totalStakeEvents?: number;

  /**
   * Amount in wei (smallest unit)
   */
  totalUnstaked?: string;

  totalUnstakeEvents?: number;

  uniqueStakers?: number;
}

export type StakingRetrieveTopStakersResponse =
  Array<StakingRetrieveTopStakersResponse.StakingRetrieveTopStakersResponseItem>;

export namespace StakingRetrieveTopStakersResponse {
  export interface StakingRetrieveTopStakersResponseItem {
    stake_count?: number;

    /**
     * Amount in wei (smallest unit)
     */
    total_staked?: string;

    /**
     * Human-readable amount in PAX
     */
    totalStakedFormatted?: string;

    user_address?: string;

    /**
     * Amount in wei (smallest unit)
     */
    votingPower?: string;

    /**
     * Human-readable amount in PAX
     */
    votingPowerFormatted?: string;
  }
}

export interface StakingRetrieveTotalResponse {
  /**
   * Amount in wei (smallest unit)
   */
  totalStaked?: string;

  /**
   * Human-readable amount in PAX
   */
  totalStakedFormatted?: string;
}

export type StakingRetrieveUnstakeHistoryResponse = Array<unknown>;

export interface StakingRetrieveVotingPowerResponse {
  /**
   * Amount in wei (smallest unit)
   */
  votingPower?: string;

  /**
   * Human-readable amount in PAX
   */
  votingPowerFormatted?: string;
}

export interface StakingCalculateEarlyUnstakePenaltyParams {
  /**
   * Amount in wei (smallest unit)
   */
  amount: string;
}

export interface StakingRetrieveStakeHistoryParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;
}

export interface StakingRetrieveTopStakersParams {
  limit?: number;
}

export interface StakingRetrieveUnstakeHistoryParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;
}

export interface StakingRetrieveVotingPowerParams {
  /**
   * Optional block number for historical query
   */
  blockNumber?: number;
}

export declare namespace Staking {
  export {
    type StakingCalculateEarlyUnstakePenaltyResponse as StakingCalculateEarlyUnstakePenaltyResponse,
    type StakingRetrieveStakeHistoryResponse as StakingRetrieveStakeHistoryResponse,
    type StakingRetrieveStakeInfoResponse as StakingRetrieveStakeInfoResponse,
    type StakingRetrieveStatsResponse as StakingRetrieveStatsResponse,
    type StakingRetrieveTopStakersResponse as StakingRetrieveTopStakersResponse,
    type StakingRetrieveTotalResponse as StakingRetrieveTotalResponse,
    type StakingRetrieveUnstakeHistoryResponse as StakingRetrieveUnstakeHistoryResponse,
    type StakingRetrieveVotingPowerResponse as StakingRetrieveVotingPowerResponse,
    type StakingCalculateEarlyUnstakePenaltyParams as StakingCalculateEarlyUnstakePenaltyParams,
    type StakingRetrieveStakeHistoryParams as StakingRetrieveStakeHistoryParams,
    type StakingRetrieveTopStakersParams as StakingRetrieveTopStakersParams,
    type StakingRetrieveUnstakeHistoryParams as StakingRetrieveUnstakeHistoryParams,
    type StakingRetrieveVotingPowerParams as StakingRetrieveVotingPowerParams,
  };
}
