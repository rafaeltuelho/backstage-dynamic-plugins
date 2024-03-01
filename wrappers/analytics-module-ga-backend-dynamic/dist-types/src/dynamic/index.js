"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicPluginInstaller = void 0;
exports.dynamicPluginInstaller = {
    kind: 'legacy',
    // Contributions of the plugin to the application.
    // Here optional fields allow embedding the code which is usually described in the plugin readme for manual addition.
    // If a contribution is not used, the field should be omitted.
    router: {
        pluginID: 'analytics-provider-ga',
        createPlugin: function (env) {
            // Return a promise to your router.
            return Promise.reject(new Error('Not implemented'));
        },
    },
    events: function (eventsBackend, env) {
        // Do something with the events backend (add subscribers or publishers)
        // and return a list of HttpPostIngressOptions that will be
        // registered with the http event endpoint.
        return [];
    },
    catalog: function (builder, env) {
        // Add catalog contributions, such as
        // entity providers or location analyzers.
    },
    scaffolder: function (env) {
        // Return an array of scaffolder actions (TemplateAction)
        // that will be registered with the scaffolder.
        return [];
    },
    search: function (indexBuilder, schedule, env) {
        // Add search contributions, such as
        // collators and decorators.
    },
};