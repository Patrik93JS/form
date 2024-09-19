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
import {
	type InputHTMLAttributes,
	type ReactNode,
} from "react";
import {
	type Control,
	type FieldValues,
	type Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	label: ReactNode;
	selectData?: Array<{
		value: string;
		label: ReactNode;
	}>;
	control: Control<T>;
	name: Path<T>;
} & InputHTMLAttributes<HTMLSelectElement>;

export const SelectController = <
	T extends FieldValues
>({
	label,
	selectData,
	control,
	name,
}: Props<T>) => {
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
								{selectData &&
									selectData.map((item) => (
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
