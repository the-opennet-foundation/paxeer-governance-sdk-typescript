// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from 'paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource delegates', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.delegates.create({ name: 'xx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.delegates.create({
      name: 'xx',
      bio: 'bio',
      ipfsProfileHash: 'ipfsProfileHash',
      socialLinks: {},
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.delegates.retrieve('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.delegates.update('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD', {
      name: 'xx',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.delegates.update('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD', {
      name: 'xx',
      bio: 'bio',
      ipfsProfileHash: 'ipfsProfileHash',
      socialLinks: {},
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.delegates.list();
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
      client.delegates.list(
        { active: true, limit: 1, offset: 0, search: 'search', sortBy: 'voting_power', sortOrder: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDelegators', async () => {
    const responsePromise = client.delegates.listDelegators('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTop', async () => {
    const responsePromise = client.delegates.listTop();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.delegates.listTop({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listVotes', async () => {
    const responsePromise = client.delegates.listVotes('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVotes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.delegates.listVotes(
        '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
        { limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStats', async () => {
    const responsePromise = client.delegates.retrieveStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sync', async () => {
    const responsePromise = client.delegates.sync('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
