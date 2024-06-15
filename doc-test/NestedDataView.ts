import { fetchNestedData } from "./api/fetchNestedData";

export async function NestedDataView() {
  const data = await fetchNestedData();

  const hasPostalCode = data.address.postalCode !== undefined;

  // should not error
  void data.address.geo.lat;

  return { hasPostalCode };
}
