import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
	FormProvider,
	useForm,
	DefaultValues,
	type SubmitHandler,
	type Control,
	type UseFormProps,
} from "react-hook-form";
import { z } from "zod";

type Props<T extends z.ZodObject<z.ZodRawShape>> =
	{
		children: (
			control: Control<z.infer<T>>
		) => ReactNode;
		schema: T;
		defaultValues?: DefaultValues<z.infer<T>>;
		onSubmit: SubmitHandler<z.infer<T>>;
	} & UseFormProps<z.infer<T>>;

export const FormContext = <
	T extends z.ZodObject<z.ZodRawShape>
>({
	children,
	schema,
	defaultValues,
	onSubmit,
	...formProps
}: Props<T>) => {
	const form = useForm<z.infer<T>>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	return (
		<FormProvider {...form}>
			<form
				{...formProps}
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(onSubmit)(e);
				}}
			>
				{children(form.control)}
			</form>
		</FormProvider>
	);
};
