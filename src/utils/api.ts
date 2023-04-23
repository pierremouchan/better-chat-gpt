export const isAzureEndpoint = (endpoint: string) => {
  return endpoint.includes('openai.azure.com');
};

export const DATABASE_ENDPOINT = 'https://scraping.pierremouchan.com';