# analytics-module-ga-dynamic

This is a **wrapper** for the backstage [analytics-module-ga](https://github.com/backstage/backstage/tree/master/plugins/analytics-module-ga) plugin created to be dynamically loaded in the [**Red Hat Developer Hub**](https://www.redhat.com/en/technologies/cloud-computing/developer-hub).

The dynamic plugins mechanism introduced by Red Hat Developer Hub (Enterprise version of the janus-idp.io project) is documented [here](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/dynamic-plugins.md).

## Loading this dynamic plugin into your RHDH instance

Add the following entry under the `global.plugins` inside the RHDH Helm Chart values yaml and upgrade the chart.

```yaml
#...
    - disabled: false
      package: '@rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic'
      integrity: >-
          sha512-m3JwgnM++iSizKcA0GLHB1F52PU89kIeM4+AQLXUUd0zQ8tv1ER5y9nlgEqdizKa+5Q7drOFtj4fP4goN6Hz5Q==
#...
```

After adding the above entry in the RHDH helm chart values, you should be able to check if the plugin has been loaded properly by inspecting the `install-dynamic-plugins` container's log output. You should see something like:

```
======= Installing dynamic plugin @rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic
==> Grabbing package archive through `npm pack`
==> Verifying package integrity
==> Removing previous plugin directory /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0
==> Extracting package archive /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0.tgz
Skipping directory entry package
Skipping directory entry package/dist
Skipping directory entry package/dist-scalprum
Skipping directory entry package/src
Skipping directory entry package/dist-scalprum/static
==> Removing package archive /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0.tgz
==> Successfully installed dynamic plugin @rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic
```