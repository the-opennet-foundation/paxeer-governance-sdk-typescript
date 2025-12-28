// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PaxeerGovernanceSDK } from '../client';

export abstract class APIResource {
  protected _client: PaxeerGovernanceSDK;

  constructor(client: PaxeerGovernanceSDK) {
    this._client = client;
  }
}
