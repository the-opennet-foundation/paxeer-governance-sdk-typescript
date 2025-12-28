// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Voters extends APIResource {
  /**
   * Get voter activity
   */
  retrieveActivity(address: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/analytics/voters/${address}`, options);
  }

  /**
   * Get top voters
   */
  retrieveTop(
    query: VoterRetrieveTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoterRetrieveTopResponse> {
    return this._client.get('/analytics/voters/top', { query, ...options });
  }
}

export type VoterRetrieveActivityResponse = unknown;

export type VoterRetrieveTopResponse = Array<unknown>;

export interface VoterRetrieveTopParams {
  limit?: number;
}

export declare namespace Voters {
  export {
    type VoterRetrieveActivityResponse as VoterRetrieveActivityResponse,
    type VoterRetrieveTopResponse as VoterRetrieveTopResponse,
    type VoterRetrieveTopParams as VoterRetrieveTopParams,
  };
}
