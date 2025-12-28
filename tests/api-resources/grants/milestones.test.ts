// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from '@paxeer-network/paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource milestones', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.grants.milestones.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.grants.milestones.submit(0, { grantId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.grants.milestones.submit(0, {
      grantId: 0,
      deliverableIpfsHash: 'deliverableIpfsHash',
    });
  });
});
