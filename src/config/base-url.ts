import { isProduction } from "./env";

export const BASE_URL = isProduction ? "https://erp-api.bethelfashion.online/api/v1/bethel-school" : "http://bethel-fashion-erp-api.test/api/v1/bethel-school";