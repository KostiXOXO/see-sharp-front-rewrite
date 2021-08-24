interface IRoute {
	path: string;
	exact: boolean;
	component: any;
	name: string;
	protected: boolean;
}

export type { IRoute };
