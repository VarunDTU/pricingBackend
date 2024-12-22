export type ShippingMode = "Easy Ship" | "FBA" | "Self Ship";
export type ServiceLevel = "Premium" | "Advanced" | "Standard" | "Basic";
export type ProductSize = "Standard" | "Heavy & Bulky";

export interface ProductType {
  productCategory: string;
  sellingPrice: number;
  weight: number;
  shippingMode: ShippingMode;
  serviceLevel: ServiceLevel;
  productSize: ProductSize;
  location: "Local" | "Regional" | "National" | "IXD";
}
