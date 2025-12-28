// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proposals extends APIResource {
  /**
   * Get proposal metrics timeline
   */
  retrieveMetrics(proposalID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/analytics/proposals/${proposalID}/metrics`, options);
  }
}

export type ProposalRetrieveMetricsResponse = unknown;

export declare namespace Proposals {
  export { type ProposalRetrieveMetricsResponse as ProposalRetrieveMetricsResponse };
}
