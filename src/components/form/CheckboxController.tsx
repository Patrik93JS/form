import { Checkbox } from "@/components/ui/checkbox";

import type { FieldValues } from "react-hook-form";
import {
	FormFieldController,
	type FormFieldProps,
} from "./FormFieldController";
import type { CheckboxProps } from "@radix-ui/react-checkbox";

type Props<T extends FieldValues> =
	CheckboxProps &
		Omit<FormFieldProps<T>, "children">;

export const CheckboxController = <
	T extends FieldValues
>({
	name,
	control,
	label,
	...props
}: Props<T>) => {
	return (
		<FormFieldController<T>
			control={control}
			label={label}
			name={name}
		>
			{(field) => (
				<Checkbox
					{...field}
					{...props}
					checked={field.value}
					onCheckedChange={(checked) => {
						field.onChange(checked);
					}}
				/>
			)}
		</FormFieldController>
	);
};
