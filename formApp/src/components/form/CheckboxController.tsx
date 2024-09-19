import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
} from "@/components/ui/form";
import type {
	ComponentPropsWithoutRef,
	FC,
	InputHTMLAttributes,
} from "react";
import type {
	Control,
	FieldValues,
	Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	name: Path<T>;
	control: Control<T>;
} & Omit<
	ComponentPropsWithoutRef<typeof Checkbox>,
	"checked" | "onCheckedChange"
> &
	InputHTMLAttributes<HTMLInputElement> &
	FormFieldControllProps;
export const CheckboxController: FC<
	Props<FieldValues>
> = ({
	name,
	control,
	title,
	description,
	...checkboxProps
}) => {
	return (
		// <FormField
		// 	control={control}
		// 	name={name}
		// 	render={({ field }) => (
		// 		<FormItem className="m-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
		// 			<FormControl>
		// 				<Checkbox
		// 					{...field}
		// 					{...checkboxProps}
		// 					checked={field.value}
		// 					onCheckedChange={(checked) => {
		// 						field.onChange(checked);
		// 					}}
		// 				/>
		// 			</FormControl>
		// 			<FormDescription>
		// 				Chama or No Chama?
		// 			</FormDescription>
		// 		</FormItem>
		// 	)}
		// />
		<FormFieldControll
			title={title}
			description={description}
		>
			<Checkbox
				{...field}
				{...checkboxProps}
				checked={field.value}
				onCheckedChange={(checked) => {
					field.onChange(checked);
				}}
			/>
		</FormFieldControll>
	);
};

export const FormFieldControll = (
	children: ReactNode
) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="m-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormLabel></FormLabel>
					<FormControl>{children}</FormControl>
					<FormDescription>
						Chama or No Chama?
					</FormDescription>
					<FormMessage></FormMessage>
				</FormItem>
			)}
		/>
	);
};
