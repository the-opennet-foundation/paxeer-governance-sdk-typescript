// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from '@paxeer-network/paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource balance', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.treasury.balance.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByToken', async () => {
    const responsePromise = client.treasury.balance.retrieveByToken(
      '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
