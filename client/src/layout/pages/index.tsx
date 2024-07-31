import clsx from "clsx";
import { navigationPages } from "layout/navigation-config";
import { FC } from "react";
import { useRoutes } from "react-router-dom";

const Pages: FC<PagesProps> = ({ sidebar }) => {
	const routes = useRoutes(navigationPages);
	return (
		<main
			className={clsx(
				"min-h-[calc(100vh-var(--header-height))] w-full",
				sidebar === null
					? "border-primary rounded-2xl border p-8"
					: "sm:p-8 lg:p-12 lg:pr-8",
			)}
		>
			{routes}
		</main>
	);
};

export interface PagesProps {
	sidebar: boolean | null;
}

export default Pages;
