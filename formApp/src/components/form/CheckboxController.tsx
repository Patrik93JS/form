import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
} from "@/components/ui/form";
import type { FC } from "react";
import type {
	Control,
	FieldValues,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	name: string;
	control: Control<T>;
};

export const CheckboxController: FC<
	Props<FieldValues>
> = ({ name, control }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="m-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormControl>
						<Checkbox
							checked={field.value}
							onCheckedChange={(checked) => {
								field.onChange(checked);
							}}
						/>
					</FormControl>
					<FormDescription>
						Chama or No Chama?
					</FormDescription>
				</FormItem>
			)}
		/>
	);
};
