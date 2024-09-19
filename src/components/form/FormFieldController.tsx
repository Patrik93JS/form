import { type ReactNode } from "react";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import type {
	Control,
	FieldValues,
	Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	children: ReactNode;
	control: Control<T>;
	name: Path<T>;
	description?: string;
	label: string;
};

export const FormFieldController = <
	T extends FieldValues
>({
	children,
	control,
	name,
	description,
	label,
}: Props<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ fieldState: { error } }) => (
				<FormItem className="m-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormLabel>{label}</FormLabel>
					<FormControl>{children}</FormControl>
					<FormDescription>
						{description}
					</FormDescription>
					<FormMessage>
						{error?.message}
					</FormMessage>
				</FormItem>
			)}
		/>
	);
};
