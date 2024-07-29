import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode } from "react";
import {
	FormProvider,
	useForm,
	type DefaultValues,
	type FieldValues,
} from "react-hook-form";
import type { z } from "zod";

type Props = {
	children: ReactNode;
	schema: z.Schema;
	defaultValues?: DefaultValues<FieldValues>;
	onSubmit?: (data: FieldValues) => void;
};

export const FormContext = ({
	children,
	schema,
	defaultValues,
	onSubmit,
	...formProps
}: Props) => {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	});

	return (
		<FormProvider {...form}>
			<form
				{...formProps}
				onSubmit={form.handleSubmit(
					onSubmit ?? (() => {})
				)}
			>
				{children}
			</form>
		</FormProvider>
	);
};
