export interface ComplexData {
  id: string;
  address: {
    country: string;
    city: string;
    postalCode?: string;
  };
  friends: ComplexFriendData[];
}

export interface ComplexFriendData {
  id: string;
  name: string;
}
