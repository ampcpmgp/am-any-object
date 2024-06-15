export interface ComplexData {
  id: string;
  name: string;
  address: {
    country: string;
    city: string;
    postalCode?: string;
  };
  friends: Friend[];
}

export interface Friend {
  id: string;
  name: string;
}
