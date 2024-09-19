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
import { type InputHTMLAttributes } from "react";
import { FormFieldController } from "./FormFieldController";

type Props<T extends FieldValues> = {
	label: string;
	control: Control<T>;
	name: Path<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputController = <
	T extends FieldValues
>({
	label,
	control,
	name,
	...props
}: Props<T>) => {
	return (
		<FormFieldController>
			control={control}
			name={name}
			render=
			{({ field }) => (
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
			)}
		</FormFieldController>
	);
};
