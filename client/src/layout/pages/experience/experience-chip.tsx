import { FC, ReactNode } from "react";

const ExperienceItemChip: FC<Props> = ({ label, text, icon }) => (
	<div className="border-primary relative min-w-52 rounded-2xl border pb-4 pl-5 pr-8 pt-4">
		<p className="bg-elevated z-10 absolute left-[calc(1.25rem_-_0.375rem)] top-[-0.7rem] px-1.5 py-0.5 text-sm uppercase">
			<b>{label}</b>
		</p>
		<div className="flex items-center gap-3">
			{icon("size-4")}
			<p>{text}</p>
		</div>
	</div>
);

interface Props {
	label: string;
	text: string;
	icon: (className: string) => ReactNode;
}

export default ExperienceItemChip;
