import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { FC } from "react";
import {
	type Control,
	type FieldValues,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	label: string;
	selectData: Array<{
		value: string;
		label: string;
	}>;
	control: Control<T>;
	name: string;
};

export const SelectController: FC<
	Props<FieldValues>
> = ({ label, selectData, control, name }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Select>
							<SelectTrigger className="w-[180px] m-5">
								<SelectValue
									placeholder={label}
								/>
							</SelectTrigger>
							<SelectContent {...field}>
								{selectData.map((item) => (
									<SelectItem
										key={item.value}
										value={item.value}
									>
										{item.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
