import { z } from "zod";
import "./App.css";
import { FormContext } from "./components/form/FormContext";
import { InputController } from "./components/form/InputController";
import { SelectController } from "./components/form/SelectController";
import { CheckboxController } from "./components/form/CheckboxController";
import { Button } from "./components/ui/button";

const animals = [
	{
		id: "1111111",
		label: "cat",
	},
	{
		id: "2222222",
		label: "dog",
	},
	{
		id: "3333333",
		label: "turtle",
	},
	{
		id: "4444444",
		label: "fish",
	},
];

const schema = z.object({
	name: z
		.string()
		.min(1, { message: "Name is required" }),
	age: z.number().min(1, {
		message: "Age must be greater than 0",
	}),
	chama: z.boolean().optional().default(false),
	animals: z
		.enum(["cat", "dog", "turtle", "fish"])
		.default("cat"),
});

const defaultValues = {
	name: "",
	age: 0,
	chama: false,
	animals: "cat",
};

function App() {
	return (
		<FormContext
			schema={schema}
			onSubmit={(values) => {
				console.log("submit", values);
			}}
			defaultValues={defaultValues}
		>
			{(control) => (
				<>
					<InputController
						label="Name"
						type="text"
						control={control}
						name="name"
					/>
					<InputController
						label="Age"
						type="number"
						control={control}
						name="age"
					/>
					<CheckboxController
						name="chama"
						control={control}
					/>
					<SelectController
						label="Animals"
						control={control}
						selectData={animals.map((item) => ({
							value: item.id,
							label: item.label,
						}))}
						name="animals"
					/>

					<Button type="submit">Submit</Button>
				</>
			)}
		</FormContext>
	);
}

export default App;
