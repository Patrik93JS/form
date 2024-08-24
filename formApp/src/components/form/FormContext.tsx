import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useRef } from "react";
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
		schema: z.Schema;
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

	const ref = useRef<HTMLFormElement>(null);

	return (
		<FormProvider {...form}>
			<form
				ref={ref}
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
