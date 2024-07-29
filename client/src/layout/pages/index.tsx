import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC = () => {
	const routes = useRoutes(navigationPages);
	return (
		<main className="border-primary min-h-[calc(100vh-5rem-4rem)] rounded-2xl border p-4 md:p-8">
			{routes}
		</main>
	);
};

export default Pages;
