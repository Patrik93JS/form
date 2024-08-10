import {
	type Control,
	type FieldValues,
} from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

type Props<T extends FieldValues> = {
	label: string;
	type?: "text" | "number";
	control: Control<T>;
	name: string;
};

export const InputController: FC<
	Props<FieldValues>
> = ({ label, type = "text", control, name }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							className="m-5"
							type={type}
							placeholder={label}
							{...field}
							onChange={(e) => {
								const value =
									type === "number"
										? parseFloat(e.target.value)
										: e.target.value;
								field.onChange(value);
							}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
