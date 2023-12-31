// PRODUCTS
export type TProductID = number;

export type TProduct = {
  id: TProductID;
  type: string;
  name: string;
  price: number;
  description: string;
  image: string;
};
export type TProducts = TProduct[];

export type TProductState = {
  entities: { [id: TProductID]: TProduct };
  ids: TProductID[];
  pages: { [pageSlug: string]: TProductID[] }; // pageSlug = concat categorySlug and pageNumber
  filter: TFilter;
  loadingStatus: LOADING_STATUS;
};
export type TFilter = {
  field: "" | "name" | "price";
  type: "asc" | "desc";
};
// PAGE
export type TCurrentPage = {
  categorySlug: string;
  page: number | undefined;
};

export type TPageState = {
  currentPage: TCurrentPage;
  pagesCount: { [categorySlug: string]: number };
  loadingStatus: LOADING_STATUS;
};

// CART
export type TCartState = {
  cart: {
    [id: TProductID]: number;
  };
};
