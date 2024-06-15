import { fetchPlainData } from "./api/fetchPlainData";

export async function PlainDataView() {
  const data = await fetchPlainData();

  const name = `${data.firstName} ${data.lastName}`;

  return { ...data, name };
}
