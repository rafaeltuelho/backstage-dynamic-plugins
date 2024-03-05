import { GoogleAnalytics } from '@backstage/plugin-analytics-module-ga';
declare const GoogleAnalyticsApi: import("@backstage/core-plugin-api").ApiFactory<import("@backstage/core-plugin-api").AnalyticsApi, GoogleAnalytics, {
    configApi: import("@backstage/config").Config;
    identityApi: import("@backstage/core-plugin-api").IdentityApi;
}>;
export { GoogleAnalyticsApi };
