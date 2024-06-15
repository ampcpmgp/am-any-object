import { fetchComplicatedData } from "./api/fetchComplicatedData";

export async function ComplexDataView() {
  const data = await fetchComplicatedData();

  const firstFriend = data.friends.at(0);
  const hasPostalCode = data.address.postalCode !== undefined;

  return { firstFriend, hasPostalCode };
}
