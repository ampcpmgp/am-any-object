export interface NestedData {
  id: string;
  address: {
    country: string;
    city: string;
    postalCode?: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
}
