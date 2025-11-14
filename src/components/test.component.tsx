export interface TestComponentProps {
		title: string;
}

const TestComponent = ({
	title,
}: TestComponentProps) => {
	return (
		<div
			className="border-solid-25 bg-neutral-0 relative flex h-fit min-h-28 w-fit min-w-44 items-center justify-center rounded-lg border px-2 py-4 transition-all duration-200 ease-in-out hover:border-solid-75 hover:cursor-pointer"
		>
			<div className="flex flex-col items-center justify-center gap-1.5">
				<span className="text-blue-100">{/* Icon would go here */}</span>
				<span className="text-size-base font-medium">{title}</span>
			</div>
		</div>
	);
}

export { TestComponent };