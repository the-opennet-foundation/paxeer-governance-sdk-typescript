// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxeerGovernanceSDK from '@paxeer-network/paxeer-governance-sdk';

const client = new PaxeerGovernanceSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource grants', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.grants.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.grants.list();
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
      client.grants.list(
        {
          applicant: '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
          limit: 1,
          offset: 0,
          programId: 0,
          reviewer: '0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD',
          search: 'search',
          sortBy: 'sortBy',
          sortOrder: 'asc',
          status: 'Pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getByApplicant', async () => {
    const responsePromise = client.grants.getByApplicant('0xf09a62DB41F5Aa24D6Cd8aB25cc8c10Cb5C777DD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPrograms', async () => {
    const responsePromise = client.grants.getPrograms();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPrograms: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.grants.getPrograms({ active: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxeerGovernanceSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getStats', async () => {
    const responsePromise = client.grants.getStats();
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
    const responsePromise = client.grants.submit({
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      milestones: [
        { amount: '90000000000000000000000000', deadline: '2019-12-27T18:11:19.117Z', title: 'title' },
      ],
      requestedAmount: '90000000000000000000000000',
      title: 'xxxxxxxxxx',
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.grants.submit({
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      milestones: [
        {
          amount: '90000000000000000000000000',
          deadline: '2019-12-27T18:11:19.117Z',
          title: 'title',
          description: 'description',
        },
      ],
      requestedAmount: '90000000000000000000000000',
      title: 'xxxxxxxxxx',
      ipfsHash: 'ipfsHash',
      programId: 0,
    });
  });
});
