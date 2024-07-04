export interface UserState {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;

	isLoading: boolean;
	userStatus: "authenticated" | "not_authenticated" | "checking";
	errorMessage: string | null;
	units: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Geo {
	lat: string;
	lng: string;
}


