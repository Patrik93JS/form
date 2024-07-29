import { type Control } from "react-hook-form";
import {
	type ZodObject,
	type ZodRawShape,
} from "zod";

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props<T extends ZodObject<ZodRawShape>> = {
	control: Control<Record<string, string>>;
	schema: T;
	name: string;
	description?: string;
	label: string;
};

export const InputController = <
	T extends ZodObject<ZodRawShape>
>({
	control,
	name,
	description,
	label,
}: Props<T>) => {
	return (
		<div>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								placeholder={label}
								{...field}
							/>
						</FormControl>
						{description && (
							<FormDescription>
								{description}
							</FormDescription>
						)}
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};
