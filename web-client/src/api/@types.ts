export type ProductType = {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string;
  price: number;
  discount: number;
  categoryId: number;
};
export type ProductPropertiesValuesType = {
  id: number;
  productId: number;
  propertyValueId: number;
};
export type ProductValuesType = {
  id: number;
  value: string;
  propertyId: number;
};
export type ProductPropertyType = {
  id: number;
  name: string;
};
export type headerCatalogCategoryType = {
  id: number;
  name: string;
  mainImageUrl: string;
  parentId: number;
};
export type categoryCountType = {
  count: number;
};
export type justinRegionType = {
  fields: {
    descr: string;
  };
};
