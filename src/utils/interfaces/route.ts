interface IRoute {
	path: string;
	exact: boolean;
	component: any;
	name: string;
	protected: boolean;
}

interface INavRoute {
	path: string;
	text: string;
}

export type { IRoute, INavRoute };
