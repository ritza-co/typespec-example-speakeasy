/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Possible statuses for an order
 */
export const OrderStatus = {
    Pending: "Pending",
    Shipped: "Shipped",
    Delivered: "Delivered",
    Cancelled: "Cancelled",
} as const;
/**
 * Possible statuses for an order
 */
export type OrderStatus = ClosedEnum<typeof OrderStatus>;

/** @internal */
export const OrderStatus$inboundSchema: z.ZodNativeEnum<typeof OrderStatus> =
    z.nativeEnum(OrderStatus);

/** @internal */
export const OrderStatus$outboundSchema: z.ZodNativeEnum<typeof OrderStatus> =
    OrderStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderStatus$ {
    /** @deprecated use `OrderStatus$inboundSchema` instead. */
    export const inboundSchema = OrderStatus$inboundSchema;
    /** @deprecated use `OrderStatus$outboundSchema` instead. */
    export const outboundSchema = OrderStatus$outboundSchema;
}
