import { NumberFormatBase} from "react-number-format";
import { Form, Grid, Icon, Image } from "semantic-ui-react";
import { useEffect } from "react";
import { FileUpload } from "./index-styles";
import styled from "styled-components";

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

const FileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	flex: 1;
	margin-left: 8px;
	width: 100%;
	.FlexBox {
		display: flex;
		width: 78%;
		justify-content: space-between;
		align-items: start;
		.Flex {
			display: flex;
			margin-left: "16px";
		}
	}
	.error {
		color: #9f3a38;
		font-size: 12px;
	}
`;

export const FileInput = ({ label, onRemove, preview, error, ...props }) => {
	useEffect(() => {
		if (props.selectedFile) {
			const file = props.selectedFile;
		}
	}, [props.selectedFile]);

	return (
		<FileContainer>
			<Label>{label}</Label>
			{preview && (
				<div className="Flex">
					<Image
						alt=""
						style={{
							width: "450px",
							height: "450px",
							objectFit: "fill",
						}}
						src={preview}
					/>
					{/* <Icon
						name="remove circle"
						size="large"
						style={{
							cursor: "pointer",
						}}
						onClick={onRemove}
					/> */}
				</div>
			)}
			<FileUpload {...props} />
			{error && <p className="error">{error}</p>}
		</FileContainer>
	);
};


export const Label = styled.label`
	color: #4a4a4a;
	font-size: 12px;
	font-weight: normal;
	margin-bottom: 6px;
`;