/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class Publications extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List all publications
     */
    async listPublications(options?: RequestOptions): Promise<Array<components.Publication>> {
        const path$ = this.templateURLComponent("/publications")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const context = { operationID: "listPublications", oAuth2Scopes: [], securitySource: null };

        const request$ = this.createRequest$(
            context,
            {
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });

        const [result$] = await this.matcher<Array<components.Publication>>()
            .json(200, z.array(components.Publication$inboundSchema))
            .fail(["4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create a new publication
     */
    async createPublication(
        request: components.Publication,
        options?: RequestOptions
    ): Promise<operations.CreatePublicationResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.Publication$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/publications")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const context = {
            operationID: "createPublication",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const request$ = this.createRequest$(
            context,
            {
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.CreatePublicationResponse>()
            .json(200, operations.CreatePublicationResponse$inboundSchema)
            .fail(["4XX", "5XX"])
            .json("default", operations.CreatePublicationResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get a specific publication by ID
     */
    async getPublication(
        request: operations.GetPublicationRequest,
        options?: RequestOptions
    ): Promise<operations.GetPublicationResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetPublicationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/publications/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const context = { operationID: "getPublication", oAuth2Scopes: [], securitySource: null };

        const request$ = this.createRequest$(
            context,
            {
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetPublicationResponse>()
            .json(200, operations.GetPublicationResponse$inboundSchema)
            .fail(["4XX", "5XX"])
            .json("default", operations.GetPublicationResponse$inboundSchema)
            .match(response);

        return result$;
    }
}
