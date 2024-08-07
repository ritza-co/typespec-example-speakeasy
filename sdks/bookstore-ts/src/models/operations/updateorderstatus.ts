/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateOrderStatusRequest = {
    id: string;
    orderStatus: components.OrderStatus;
};

export type UpdateOrderStatusResponse = components.ErrorT | components.Order;

/** @internal */
export const UpdateOrderStatusRequest$inboundSchema: z.ZodType<
    UpdateOrderStatusRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        OrderStatus: components.OrderStatus$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            OrderStatus: "orderStatus",
        });
    });

/** @internal */
export type UpdateOrderStatusRequest$Outbound = {
    id: string;
    OrderStatus: string;
};

/** @internal */
export const UpdateOrderStatusRequest$outboundSchema: z.ZodType<
    UpdateOrderStatusRequest$Outbound,
    z.ZodTypeDef,
    UpdateOrderStatusRequest
> = z
    .object({
        id: z.string(),
        orderStatus: components.OrderStatus$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            orderStatus: "OrderStatus",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrderStatusRequest$ {
    /** @deprecated use `UpdateOrderStatusRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateOrderStatusRequest$inboundSchema;
    /** @deprecated use `UpdateOrderStatusRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateOrderStatusRequest$outboundSchema;
    /** @deprecated use `UpdateOrderStatusRequest$Outbound` instead. */
    export type Outbound = UpdateOrderStatusRequest$Outbound;
}

/** @internal */
export const UpdateOrderStatusResponse$inboundSchema: z.ZodType<
    UpdateOrderStatusResponse,
    z.ZodTypeDef,
    unknown
> = z.union([components.ErrorT$inboundSchema, components.Order$inboundSchema]);

/** @internal */
export type UpdateOrderStatusResponse$Outbound =
    | components.ErrorT$Outbound
    | components.Order$Outbound;

/** @internal */
export const UpdateOrderStatusResponse$outboundSchema: z.ZodType<
    UpdateOrderStatusResponse$Outbound,
    z.ZodTypeDef,
    UpdateOrderStatusResponse
> = z.union([components.ErrorT$outboundSchema, components.Order$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrderStatusResponse$ {
    /** @deprecated use `UpdateOrderStatusResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateOrderStatusResponse$inboundSchema;
    /** @deprecated use `UpdateOrderStatusResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateOrderStatusResponse$outboundSchema;
    /** @deprecated use `UpdateOrderStatusResponse$Outbound` instead. */
    export type Outbound = UpdateOrderStatusResponse$Outbound;
}
