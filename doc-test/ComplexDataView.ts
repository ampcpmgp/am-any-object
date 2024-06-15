import { fetchComplexData } from "./api/fetchComplexData";

export async function ComplexDataView() {
  const data = await fetchComplexData();

  const firstFriend = data.friends.at(0);
  const secondFriend = data.friends.at(1);
  const firstFriendName = firstFriend?.name;
  const secondFriendName = secondFriend?.name;
  const hasPostalCode = data.address.postalCode !== undefined;

  return { firstFriendName, secondFriendName, hasPostalCode };
}
