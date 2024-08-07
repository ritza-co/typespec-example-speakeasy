# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
    const result = await sdk.orders.placeOrder({
        id: "<id>",
        customerId: "<value>",
        items: [
            {
                id: "<id>",
                title: "<value>",
                publishDate: new Date("2024-07-07T11:02:43.309Z"),
                price: 435.32,
                type: "Book",
                author: "<value>",
                isbn: "<value>",
            },
        ],
        totalPrice: 8499.45,
        status: "Shipped",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [orders](docs/sdks/orders/README.md)

* [placeOrder](docs/sdks/orders/README.md#placeorder) - Place a new order
* [getOrder](docs/sdks/orders/README.md#getorder) - Get an order by ID
* [updateOrderStatus](docs/sdks/orders/README.md#updateorderstatus) - Update the status of an order

### [publications](docs/sdks/publications/README.md)

* [listPublications](docs/sdks/publications/README.md#listpublications) - List all publications
* [createPublication](docs/sdks/publications/README.md#createpublication) - Create a new publication
* [getPublication](docs/sdks/publications/README.md#getpublication) - Get a specific publication by ID
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
    const result = await sdk.orders.placeOrder(
        {
            id: "<id>",
            customerId: "<value>",
            items: [
                {
                    id: "<id>",
                    title: "<value>",
                    publishDate: new Date("2024-07-07T11:02:43.309Z"),
                    price: 435.32,
                    type: "Book",
                    author: "<value>",
                    isbn: "<value>",
                },
            ],
            totalPrice: 8499.45,
            status: "Shipped",
        },
        {
            retries: {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1,
                    maxInterval: 50,
                    exponent: 1.1,
                    maxElapsedTime: 100,
                },
                retryConnectionErrors: false,
            },
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
});

async function run() {
    const result = await sdk.orders.placeOrder({
        id: "<id>",
        customerId: "<value>",
        items: [
            {
                id: "<id>",
                title: "<value>",
                publishDate: new Date("2024-07-07T11:02:43.309Z"),
                price: 435.32,
                type: "Book",
                author: "<value>",
                isbn: "<value>",
            },
        ],
        totalPrice: 8499.45,
        status: "Shipped",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "openapi";
import { SDKValidationError } from "openapi/models/errors";

const sdk = new SDK();

async function run() {
    let result;
    try {
        result = await sdk.orders.placeOrder({
            id: "<id>",
            customerId: "<value>",
            items: [
                {
                    id: "<id>",
                    title: "<value>",
                    publishDate: new Date("2024-07-07T11:02:43.309Z"),
                    price: 435.32,
                    type: "Book",
                    author: "<value>",
                    isbn: "<value>",
                },
            ],
            totalPrice: 8499.45,
            status: "Shipped",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://127.0.0.1:4010` | None |

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
    serverIdx: 0,
});

async function run() {
    const result = await sdk.orders.placeOrder({
        id: "<id>",
        customerId: "<value>",
        items: [
            {
                id: "<id>",
                title: "<value>",
                publishDate: new Date("2024-07-07T11:02:43.309Z"),
                price: 435.32,
                type: "Book",
                author: "<value>",
                isbn: "<value>",
            },
        ],
        totalPrice: 8499.45,
        status: "Shipped",
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
    serverURL: "http://127.0.0.1:4010",
});

async function run() {
    const result = await sdk.orders.placeOrder({
        id: "<id>",
        customerId: "<value>",
        items: [
            {
                id: "<id>",
                title: "<value>",
                publishDate: new Date("2024-07-07T11:02:43.309Z"),
                price: 435.32,
                type: "Book",
                author: "<value>",
                isbn: "<value>",
            },
        ],
        totalPrice: 8499.45,
        status: "Shipped",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
