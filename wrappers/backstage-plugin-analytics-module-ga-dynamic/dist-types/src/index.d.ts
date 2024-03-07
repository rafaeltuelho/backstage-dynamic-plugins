import { GoogleAnalytics4 } from '@backstage/plugin-analytics-module-ga4';
declare const GoogleAnalyticsApi: import("@backstage/core-plugin-api").ApiFactory<import("@backstage/core-plugin-api").AnalyticsApi, GoogleAnalytics4, {
    configApi: import("@backstage/config").Config;
    identityApi: import("@backstage/core-plugin-api").IdentityApi;
}>;
export { GoogleAnalyticsApi };
