// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProposalsAPI from '../proposals/proposals';
import * as BalanceAPI from './balance';
import { Balance, BalanceRetrieveResponse, TreasuryBalance } from './balance';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Treasury extends APIResource {
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);

  /**
   * Get all token balances
   */
  listBalances(options?: RequestOptions): APIPromise<TreasuryListBalancesResponse> {
    return this._client.get('/treasury/balances', options);
  }

  /**
   * Get budgets
   */
  listBudgets(
    query: TreasuryListBudgetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryListBudgetsResponse> {
    return this._client.get('/treasury/budgets', { query, ...options });
  }

  /**
   * Get daily treasury flows
   */
  listFlows(
    query: TreasuryListFlowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryListFlowsResponse> {
    return this._client.get('/treasury/flows', { query, ...options });
  }

  /**
   * Get top recipients
   */
  listRecipients(
    query: TreasuryListRecipientsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryListRecipientsResponse> {
    return this._client.get('/treasury/recipients', { query, ...options });
  }

  /**
   * Get treasury transactions
   */
  listTransactions(
    query: TreasuryListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreasuryListTransactionsResponse> {
    return this._client.get('/treasury/transactions', { query, ...options });
  }

  /**
   * Get treasury statistics
   */
  retrieveStats(options?: RequestOptions): APIPromise<TreasuryRetrieveStatsResponse> {
    return this._client.get('/treasury/stats', options);
  }
}

export type TreasuryListBalancesResponse = Array<BalanceAPI.TreasuryBalance>;

export type TreasuryListBudgetsResponse = Array<TreasuryListBudgetsResponse.TreasuryListBudgetsResponseItem>;

export namespace TreasuryListBudgetsResponse {
  export interface TreasuryListBudgetsResponseItem {
    id?: string;

    category_id?: string;

    description?: string;

    end_time?: string;

    is_active?: boolean;

    name?: string;

    /**
     * Amount in wei (smallest unit)
     */
    remaining?: string;

    /**
     * Amount in wei (smallest unit)
     */
    spent_amount?: string;

    start_time?: string;

    /**
     * Amount in wei (smallest unit)
     */
    total_amount?: string;

    utilizationPercent?: number;
  }
}

export type TreasuryListFlowsResponse = Array<TreasuryListFlowsResponse.TreasuryListFlowsResponseItem>;

export namespace TreasuryListFlowsResponse {
  export interface TreasuryListFlowsResponseItem {
    date?: string;

    /**
     * Amount in wei (smallest unit)
     */
    inflow?: string;

    /**
     * Amount in wei (smallest unit)
     */
    outflow?: string;
  }
}

export type TreasuryListRecipientsResponse = Array<unknown>;

export interface TreasuryListTransactionsResponse {
  pagination?: ProposalsAPI.Pagination;

  transactions?: Array<TreasuryListTransactionsResponse.Transaction>;
}

export namespace TreasuryListTransactionsResponse {
  export interface Transaction {
    id?: string;

    /**
     * Amount in wei (smallest unit)
     */
    amount?: string;

    /**
     * Human-readable amount in PAX
     */
    amountFormatted?: string;

    description?: string;

    executed_at?: string;

    from_address?: string;

    to_address?: string;

    token_address?: string;

    tx_hash?: string;

    tx_id?: number;

    tx_type?: 'deposit' | 'withdraw' | 'execute';
  }
}

export interface TreasuryRetrieveStatsResponse {
  /**
   * Amount in wei (smallest unit)
   */
  balance?: string;

  /**
   * Human-readable amount in PAX
   */
  balanceFormatted?: string;

  /**
   * Amount in wei (smallest unit)
   */
  totalDeposited?: string;

  /**
   * Human-readable amount in PAX
   */
  totalDepositedFormatted?: string;

  /**
   * Amount in wei (smallest unit)
   */
  totalWithdrawn?: string;

  /**
   * Human-readable amount in PAX
   */
  totalWithdrawnFormatted?: string;

  transactionCount?: number;
}

export interface TreasuryListBudgetsParams {
  active?: boolean;
}

export interface TreasuryListFlowsParams {
  days?: number;
}

export interface TreasuryListRecipientsParams {
  limit?: number;
}

export interface TreasuryListTransactionsParams {
  endDate?: string;

  fromAddress?: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Amount in wei (smallest unit)
   */
  maxAmount?: string;

  /**
   * Amount in wei (smallest unit)
   */
  minAmount?: string;

  /**
   * Number of items to skip
   */
  offset?: number;

  startDate?: string;

  toAddress?: string;

  txType?: 'deposit' | 'withdraw' | 'execute';
}

Treasury.Balance = Balance;

export declare namespace Treasury {
  export {
    type TreasuryListBalancesResponse as TreasuryListBalancesResponse,
    type TreasuryListBudgetsResponse as TreasuryListBudgetsResponse,
    type TreasuryListFlowsResponse as TreasuryListFlowsResponse,
    type TreasuryListRecipientsResponse as TreasuryListRecipientsResponse,
    type TreasuryListTransactionsResponse as TreasuryListTransactionsResponse,
    type TreasuryRetrieveStatsResponse as TreasuryRetrieveStatsResponse,
    type TreasuryListBudgetsParams as TreasuryListBudgetsParams,
    type TreasuryListFlowsParams as TreasuryListFlowsParams,
    type TreasuryListRecipientsParams as TreasuryListRecipientsParams,
    type TreasuryListTransactionsParams as TreasuryListTransactionsParams,
  };

  export {
    Balance as Balance,
    type TreasuryBalance as TreasuryBalance,
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
  };
}
