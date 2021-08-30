interface ILoginData {
	email: string;
	password: string;
}
interface IGoogleLoginData {
	emailAddress: string;
	username: string;
	googleId: string;
	name: string;
	surname: string;
}

interface IRegisterData {
	username: string;
	password: string;
	passwordRetyped: string;
	email: string;
}

interface IPasswordChange {
	password: string;
	passwordRetyped: string;
}

export type { ILoginData, IGoogleLoginData, IRegisterData, IPasswordChange };
