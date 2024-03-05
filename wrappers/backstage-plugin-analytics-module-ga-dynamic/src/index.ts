import { analyticsApiRef, configApiRef, createApiFactory, identityApiRef } from '@backstage/core-plugin-api';
import { GoogleAnalytics } from '@backstage/plugin-analytics-module-ga';

const GoogleAnalyticsApi = createApiFactory({
  api: analyticsApiRef,
  deps: { configApi: configApiRef, identityApi: identityApiRef },
  factory: ({ configApi, identityApi }) => GoogleAnalytics.fromConfig(configApi, { identityApi })
});

export { GoogleAnalyticsApi };