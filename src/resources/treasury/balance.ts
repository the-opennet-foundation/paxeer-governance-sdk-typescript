// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Balance extends APIResource {
  /**
   * Get treasury PAX balance
   */
  retrieve(options?: RequestOptions): APIPromise<BalanceRetrieveResponse> {
    return this._client.get('/treasury/balance', options);
  }

  /**
   * Get specific token balance
   */
  retrieveByToken(tokenAddress: string, options?: RequestOptions): APIPromise<TreasuryBalance> {
    return this._client.get(path`/treasury/balance/${tokenAddress}`, options);
  }
}

export interface TreasuryBalance {
  /**
   * Amount in wei (smallest unit)
   */
  balance?: string;

  /**
   * Human-readable amount in PAX
   */
  balanceFormatted?: string;

  token_address?: string;

  token_symbol?: string;

  usd_value?: number | null;
}

export interface BalanceRetrieveResponse {
  /**
   * Amount in wei (smallest unit)
   */
  balance?: string;

  /**
   * Human-readable amount in PAX
   */
  balanceFormatted?: string;
}

export declare namespace Balance {
  export { type TreasuryBalance as TreasuryBalance, type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
