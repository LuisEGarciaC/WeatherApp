export interface UserState {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
  company: Company;
  userlogin: UserLogin
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

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}


export interface UserLogin {
	isLoging: boolean;
	usarStatus: "authenticated" | "not_authenticated" | "checking";
	errorMessage: string | null;
	units: string
}