// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from 'paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('getProfile', async () => {
    const responsePromise = client.users.getProfile('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateProfile', async () => {
    const responsePromise = client.users.updateProfile('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
