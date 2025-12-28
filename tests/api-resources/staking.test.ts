// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from 'paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource staking', () => {
  // Prism tests are disabled
  test.skip('calculateEarlyUnstakePenalty: only required params', async () => {
    const responsePromise = client.staking.calculateEarlyUnstakePenalty(
      '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
      { amount: '90000000000000000000000000' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('calculateEarlyUnstakePenalty: required and optional params', async () => {
    const response = await client.staking.calculateEarlyUnstakePenalty(
      '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
      { amount: '90000000000000000000000000' },
    );
  });

  // Prism tests are disabled
  test.skip('retrieveStakeHistory', async () => {
    const responsePromise = client.staking.retrieveStakeHistory('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStakeHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.staking.retrieveStakeHistory(
        '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStakeInfo', async () => {
    const responsePromise = client.staking.retrieveStakeInfo('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStats', async () => {
    const responsePromise = client.staking.retrieveStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTopStakers', async () => {
    const responsePromise = client.staking.retrieveTopStakers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTopStakers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.staking.retrieveTopStakers({ limit: 100 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveTotal', async () => {
    const responsePromise = client.staking.retrieveTotal();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUnstakeHistory', async () => {
    const responsePromise = client.staking.retrieveUnstakeHistory(
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

  // Prism tests are disabled
  test.skip('retrieveUnstakeHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.staking.retrieveUnstakeHistory(
        '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveVotingPower', async () => {
    const responsePromise = client.staking.retrieveVotingPower('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveVotingPower: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.staking.retrieveVotingPower(
        '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
        { blockNumber: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });
});
