export const environment = {
  production: true,
  apiAddress: '${DESAFIO_FRONT_API_URL}/api/v1',
  clientBasicAuth: `Basic ${btoa('${DESAFIO_FRONT_CLIENT_APP}')}`,
  webAddress: '${WEB_ADDRESS}',
};
