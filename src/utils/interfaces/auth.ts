interface ILoginData {
	email: string;
	password: string;
}
interface IGoogleLoginData {
	emailAddress: string;
	username: string;
	googleId: string;
}

interface IRegisterData {
	username: string;
	password: string;
	passwordRetyped: string;
	email: string;
}

export type { ILoginData, IGoogleLoginData, IRegisterData };
