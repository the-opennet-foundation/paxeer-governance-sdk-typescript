// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from 'paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource treasury', () => {
  // Prism tests are disabled
  test.skip('listBalances', async () => {
    const responsePromise = client.treasury.listBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBudgets', async () => {
    const responsePromise = client.treasury.listBudgets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBudgets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.treasury.listBudgets({ active: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFlows', async () => {
    const responsePromise = client.treasury.listFlows();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFlows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.treasury.listFlows({ days: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listRecipients', async () => {
    const responsePromise = client.treasury.listRecipients();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRecipients: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.treasury.listRecipients({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTransactions', async () => {
    const responsePromise = client.treasury.listTransactions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.treasury.listTransactions(
        {
          endDate: '2019-12-27',
          fromAddress: '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
          limit: 1,
          maxAmount: '90000000000000000000000000',
          minAmount: '90000000000000000000000000',
          offset: 0,
          startDate: '2019-12-27',
          toAddress: '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
          txType: 'deposit',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStats', async () => {
    const responsePromise = client.treasury.retrieveStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
