export default ({ env }) => ({
    upload: {
      provider: 'local',
      providerOptions: {
        sizeLimit:  env('UPLOADS_SIZE_LIMIT', 1000000), // Set the size limit for uploads
        path: env('UPLOADS_PATH', 'home/site/wwwroot/public'),
      },
    },
    email: {
      config: {
        provider: 'strapi-provider-email-azure',
        providerOptions: {
          endpoint: env('AZURE_ENDPOINT'),
        },
        settings: {
          defaultFrom: env('FALLBACK_EMAIL'),
        },
      },
    }
})