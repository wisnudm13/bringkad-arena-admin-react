import { NumberFormatBase} from "react-number-format";
import { Form, Grid, Icon } from "semantic-ui-react";


export const FormInput = (props) => {
	let {
		isCurrency,
		id,
		defaultValue,
		name,
		onChange,
		maxValue,
		decimalScale,
	} = props;
	const inputFormat = isCurrency ? (
		<NumberFormatBase
			id={id}
			thousandSeparator={"."}
			decimalSeparator={","}
			decimalScale={decimalScale ? decimalScale : "number"}
			prefix={"Rp "}
			onBlur={() => {}}
			value={defaultValue === 0 ? "" : defaultValue}
			allowNegative={false}
			onValueChange={(e) => {
				let value = e.value;
				if (value && value > maxValue) {
					defaultValue = value = maxValue;
				}
				typeof onChange === "function" &&
					onChange(e, { name: name, value: value });
			}}
			allowEmptyFormatting
			{...props}
		/>
	) : null;

	return (
		<Form.Input
			type={props.type ? "text" : props.type}
			fluid
			placeholder={props.label}
			label={props.label}
			width={props.width}
			defaultValue={defaultValue}
			{...props}
		>
			{inputFormat}
		</Form.Input>
	);
};