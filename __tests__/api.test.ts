import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { fetchTrendingGifs, searchGifs } from '../src/api/giphy';
import { ApiResponse } from '../src/types/api';

const mock = new AxiosMockAdapter(axios);

const mockApiResponse: ApiResponse = {
  data: [
    { id: '1', title: 'Funny GIF', images: { original: { url: 'https://example.com/gif1.gif' } } },
    { id: '2', title: 'Cool GIF', images: { original: { url: 'https://example.com/gif2.gif' } } },
  ],
  pagination: {
    total_count: 100,
    count: 10,
    offset: 0,
  },
};

beforeEach(() => {
  mock.reset();
});

describe('Giphy API', () => {
  test('fetchTrendingGifs should return trending GIFs', async () => {
    mock.onGet(/trending/).reply(200, mockApiResponse);

    const response = await fetchTrendingGifs();
    expect(response.data).toHaveLength(2);
    expect(response.data[0].title).toBe('Funny GIF');
  });

  test('searchGifs should return search results', async () => {
    mock.onGet(/search/).reply(200, mockApiResponse);

    const response = await searchGifs('funny');
    expect(response.data).toHaveLength(2);
    expect(response.data[0].title).toBe('Funny GIF');
  });

  test('fetchTrendingGifs should handle errors', async () => {
    mock.onGet(/trending/).reply(500);

    await expect(fetchTrendingGifs()).rejects.toThrow();
  });
});
