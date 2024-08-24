import {
	type Control,
	type FieldValues,
	type Path,
} from "react-hook-form";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	FC,
	type InputHTMLAttributes,
} from "react";

type Props<T extends FieldValues> = {
	label: string;
	control: Control<T>;
	name: Path<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputController: FC<
	Props<FieldValues>
> = ({ label, control, name, ...props }) => {
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
							placeholder={label}
							{...field}
							{...props}
							onChange={(e) => {
								const value =
									props.type === "number"
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
