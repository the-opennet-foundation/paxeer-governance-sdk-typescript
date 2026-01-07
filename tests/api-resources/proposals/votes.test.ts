// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from '@paxeer-network/paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource votes', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.proposals.votes.retrieve('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD', {
      proposalId: 'proposalId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.proposals.votes.retrieve('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD', {
      proposalId: 'proposalId',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.proposals.votes.list('proposalId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.proposals.votes.list(
        'proposalId',
        {
          limit: 1,
          offset: 0,
          support: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });
});
