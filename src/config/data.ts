import { isProduction } from "./env";

export const config = {
    SUPPORT_PHONE: "233557612426",
    SUPPORT_MAIL: "info@bethelfashion.online",
    PAYSTACK_PUBLIC_KEY: isProduction ? import.meta.env.VITE_PAYSTACK_PROD_PUBLIC_KEY : import.meta.env.VITE_PAYSTACK_TEST_PUBLIC_KEY
}