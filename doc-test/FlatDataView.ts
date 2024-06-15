import { fetchFlatData } from "./api/fetchFlatData";

export async function FlatDataView() {
  const data = await fetchFlatData();

  const name = `${data.firstName} ${data.lastName}`;

  return { ...data, name };
}
