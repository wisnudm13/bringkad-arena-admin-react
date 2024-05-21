import withRouter from "../../withRouter";
import * as action from "../../redux/action";
import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useFormik } from "formik";
import {
	Select,
	Form,
	Checkbox,
	Grid,
	Dimmer,
	Loader,
	Segment,
} from "semantic-ui-react";
import { FunctionButton } from "components/Button";
import { DefaultForm } from "components/Form";
import { DefaultFormInput } from "components/Form";
import { FormInput } from "components/Input";
import BringkadArenaAPI from "services/InternalAPI";
import CustomAlert from "components/CustomAlert";



const { Row, Column } = Grid;

const UserDetail = ({ action, ...props }) => {
	const [isListLoading, setIsListLoading] = useState(true);
	const [notification, setNotification] = useState(false);
	// const [adminData, setAdminData] = useState({});
	const [activeIndex, setActiveIndex] = useState(0);
	const [userType, setUserType] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [initialValues, setInitialValues] = useState({});
	const [alertMessage, setAlertMessage] = useState({});
	const [isShowAlert, setIsShowAlert] = useState(false);

    let location = useLocation();
	let navigate = useNavigate();

	useEffect(() => {
		handleGetUserData();
	}, []);

	useEffect(() => {
		if (props.userData?.type === 200) {
            const data = props.userData.data;
            if (!data) return;
            const values = {
                id: data.id,
                phoneNumber: data.phoneNumber,
            };

            const finalData = { ...data, ...values };

            setInitialValues(finalData);
		}
	}, [props.userData]);

	const handleGetUserData = () => {
		const actions = {
			sdk: {
				parent: "usersAPI",
				child: "getUserData",
			},
			key: {
				group: "Users",
				value: "userData",
			},
			token: true,
		};
		action.fetch({
			...actions,
			data: {
				id: props.router.params.id,
			},
		});
	};

    const formik = useFormik({
		initialValues: initialValues,
		// validationSchema: validationSchema,
		validateOnChange: true,
		enableReinitialize: true,
		onSubmit: (values) => {
			setIsSubmitting(true);

			const isEditing = location.state;
			if (isEditing)
				updateUserDetail(values);
			// else createLiteBorrower(values, onSuccessfulSubmit, onFailedSubmit);
		},
	});

	const updateUserDetail = async (values, onSuccess, onFailure) => {
		const userID = values.id
		const updateUserResponse = await BringkadArenaAPI.updateUserData({
            name: values.name,
            phone_number: values.phoneNumber
        }, values.id)

		console.log(updateUserResponse)

        if (updateUserResponse.status !== 200) {
            setIsSubmitting(false);
			setIsShowAlert(true)
			// const errorMessage = updateUserResponse.errors;
			setAlertMessage({
				type: "errorMessage",
				message: "Error updating user data",
			});

        } else {
            setIsSubmitting(false);
			setIsShowAlert(true)
			setAlertMessage({
				type: "successMessage",
				message: "Successfully updated user data",
			});
			// setTimeout(() => {
			// 	formik.resetForm();
			// 	navigate(`/user/${userID}`, { state: {isEditing: true}});
			// }, 600000);
        }
	}

	const clearAlertMessage = () => setAlertMessage({});

	// const handleToggleNotification = (notification) => {
	// 	setNotification(notification);
	// };

	// const handleTabChange = (e, { activeIndex }) => {
	// 	setActiveIndex(activeIndex);
	// };

    const isEditing = location.state;

	return (
		<>
			<CustomAlert
				type={alertMessage.type}
				visible={isShowAlert}
				animation="slide down"
				duration={1000}
				message={alertMessage.message}
				onClick={clearAlertMessage}
			/>
			<Layout location={location} isListLoading={false}>
				<h3> {isEditing ? "Edit User" : "Add User"}</h3>
				<Dimmer.Dimmable as={Segment} dimmed={isSubmitting}>
					<Dimmer
						active={isSubmitting}
						verticalAlign="bottom"
						inverted
					>
						<Loader>Saving User Data...</Loader>
					</Dimmer>
					<DefaultForm
						style={{ padding: "0 20px" }}
						onSubmit={formik.handleSubmit}
					>
						<Row>
							<Column width="16">
								<br />
								User Data
								<hr />
							</Column>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									name="name"
									label="Name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.name}
									// error={
									// 	formik.touched.name &&
									// 	formik.errors.name && {
									// 		content: formik.errors.name,
									// 	}
									// }
									width="8"
								/>
                                <FormInput
									name="phoneNumber"
									label="Phone Number"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phoneNumber}
									// error={
									// 	formik.touched.name &&
									// 	formik.errors.name && {
									// 		content: formik.errors.name,
									// 	}
									// }
									width="8"
								/>
								
							</Form.Group>
						</Row>
                        {/* <Row>
							<Form.Group>
								<FormInput
									name="password"
									label="Password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={null}
									// error={
									// 	formik.touched.name &&
									// 	formik.errors.name && {
									// 		content: formik.errors.name,
									// 	}
									// }
									width="8"
								/>
                                <FormInput
									name="confirmPassword"
									label="Confirm Password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={null}
									// error={
									// 	formik.touched.name &&
									// 	formik.errors.name && {
									// 		content: formik.errors.name,
									// 	}
									// }
									width="8"
								/>
								
							</Form.Group>
						</Row> */}
						{/* <Row> */}
							{/* <Form.Group>
								<FormInput
									label="KTP Number"
									name="identityNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.identityNumber}
									error={
										formik.touched.identityNumber &&
										formik.errors.identityNumber && {
											content:
												formik.errors.identityNumber,
										}
									}
									width="8"
								/>
								<FileInput
									label="Selfie with KTP Image"
									type="file"
									accept=".jpg,.jpeg,.png,.pdf,"
									name="selfieImage"
									selectedFile={formik.values.selfieImage}
									preview={
										formik.values.selfieImagePreview ||
										(formik.values.selfieImage &&
											apiUrl + formik.values.selfieImage)
									}
									onChange={(e) => {
										handleFileupload(e, "selfieImage");
									}}
									onBlur={formik.handleBlur}
									onRemove={() => removeFile("selfieImage")}
									error={
										formik.touched.selfieImage &&
										formik.errors.selfieImage
									}
								/>
							</Form.Group>
						</Row> */}
						{/* <Row>
							<Form.Group>
								<FormInput
									label="NPWP Number"
									name="npwpNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.npwpNumber}
									width="8"
									error={
										formik.errors.npwpNumber && {
											content: formik.errors.npwpNumber,
										}
									}
								/>
								<FileInput
									label="NPWP Image"
									type="file"
									accept=".jpg,.jpeg,.png,.pdf,"
									name="npwpImage"
									selectedFile={formik.values.npwpImage}
									preview={
										formik.values.npwpImagePreview ||
										(formik.values.npwpImage &&
											apiUrl + formik.values.npwpImage)
									}
									onChange={(e) => {
										handleFileupload(e, "npwpImage");
									}}
									onBlur={formik.handleBlur}
									onRemove={() => removeFile("npwpImage")}
									error={formik.errors.npwpImage}
								/>
							</Form.Group>
						</Row> */}
						{/* <Row>
							<Form.Group widths="equal">
								<Form.Field
									label="gender"
									name="gender"
									control={Select}
									options={genderOptions}
									value={formik.values.gender}
									onChange={(event, data) =>
										formik.setFieldValue(
											"gender",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									error={
										formik.touched.gender &&
										formik.errors.gender && {
											content: formik.errors.gender,
										}
									}
								/>
								<Form.Field
									label="Religion"
									name="religion"
									control={Select}
									search
									options={religions}
									value={formik.values.religion}
									onChange={(event, data) =>
										formik.setFieldValue(
											"religion",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									error={
										formik.touched.religion &&
										formik.errors.religion && {
											content: formik.errors.religion,
										}
									}
								/>
							</Form.Group>
						</Row>
						{/* <Row>
							<Form.Group>
								<FormInput
									label="Birthplace"
									name="placeOfBirth"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.placeOfBirth}
									width="8"
									error={
										formik.touched.placeOfBirth &&
										formik.errors.placeOfBirth && {
											content: formik.errors.placeOfBirth,
										}
									}
								/>
								<DatePickerInput
									inputTitle="Date of Birth"
									dateFormat="YYYY-MM-DD"
									onChange={(date) =>
										formik.setFieldValue(
											"dateOfBirth",
											date
										)
									}
									localization="id"
									value={formik.values.dateOfBirth}
									errorMsg={formik.errors.dateOfBirth}
									showErrorMessage={
										formik.touched.dateOfBirth &&
										formik.errors.dateOfBirth
									}
									placeholder="Date of Birth"
								/>
							</Form.Group>
						</Row> */}
						{/* <Row>
							<Form.Group>
								<Form.Field
									label="Marital Status"
									name="maritalStatus"
									control={Select}
									options={maritalStatus}
									value={formik.values.maritalStatus}
									onChange={(event, data) =>
										formik.setFieldValue(
											"maritalStatus",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									error={
										formik.touched.maritalStatus &&
										formik.errors.maritalStatus && {
											content:
												formik.errors.maritalStatus,
										}
									}
									width="8"
								/>
								{formik.values.maritalStatus === 2 && (
									<Form.Field>
										<Label>Is Spouse Working?</Label>
										<Checkbox
											toggle
											label={
												formik.values.isSpouseWorking
													? "Yes"
													: "No"
											}
											checked={
												formik.values.isSpouseWorking
											}
											onChange={(e, data) => {
												formik.setFieldValue(
													"isSpouseWorking",
													data.checked
												);
											}}
										/>
									</Form.Field>
								)}
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Jumlah Tanggungan"
									name="totalDependents"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.totalDependents}
									width="8"
									error={
										formik.touched.totalDependents &&
										formik.errors.totalDependents && {
											content:
												formik.errors.totalDependents,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<br />
								Contact & Address
								<hr />
							</Column>
						</Row> */}
						{/* <Row>
							<Form.Group widths="equal">
								<FormInput
									label="Email"
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									error={
										formik.touched.email &&
										formik.errors.email && {
											content: formik.errors.email,
										}
									}
								/>
								<FormInput
									label="Cellphone Number"
									name="phoneNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phoneNumber}
									error={
										formik.touched.phoneNumber &&
										formik.errors.phoneNumber && {
											content: formik.errors.phoneNumber,
										}
									}
								/>
							</Form.Group>
						</Row> */}
						{/* <Row>
							<Form.Group>
								<FormInput
									label="KTP Address"
									name="ktpAddress"
									onChange={(event, data) => {
										handleKtpFiledsChange(
											"ktpAddress",
											data.value
										);
									}}
									onBlur={formik.handleBlur}
									value={formik.values.ktpAddress}
									width="8"
									error={
										formik.touched.ktpAddress &&
										formik.errors.ktpAddress && {
											content: formik.errors.ktpAddress,
										}
									}
								/>
								<Form.Field
									label="KTP Province"
									name="ktpProvinceId"
									control={Select}
									search
									options={provinces}
									value={formik.values.ktpProvinceId}
									onChange={(event, data) => {
										handleKtpFiledsChange(
											"ktpProvinceId",
											data.value
										);
										fetchCities(data.value, setKtpCities);
									}}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.ktpProvinceId &&
										formik.errors.ktpProvinceId && {
											content:
												formik.errors.ktpProvinceId,
										}
									}
								/>
							</Form.Group>
						</Row> */}
						{/* <Row>
							<Form.Group widths="equal">
								<Form.Field
									label="KTP City"
									name="ktpCityId"
									control={Select}
									search
									options={ktpCities}
									value={formik.values.ktpCityId}
									onChange={(event, data) => {
										handleKtpFiledsChange(
											"ktpCityId",
											data.value
										);
										fetchSubDistricts(
											data.value,
											setKtpSubDistricts
										);
									}}
									onBlur={formik.handleBlur}
									error={
										formik.touched.ktpCityId &&
										formik.errors.ktpCityId && {
											content: formik.errors.ktpCityId,
										}
									}
								/>
								<Form.Field
									label="KTP Sub District"
									name="ktpSubDistrictId"
									control={Select}
									search
									options={ktpSubDistricts}
									value={formik.values.ktpSubDistrictId}
									onChange={(event, data) => {
										handleKtpFiledsChange(
											"ktpSubDistrictId",
											data.value
										);
										fetchVillages(
											data.value,
											setKtpVillages
										);
									}}
									onBlur={formik.handleBlur}
									error={
										formik.touched.ktpSubDistrictId &&
										formik.errors.ktpSubDistrictId && {
											content:
												formik.errors.ktpSubDistrictId,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="KTP Village"
									name="ktpVillageId"
									control={Select}
									search
									options={ktpVillages}
									value={formik.values.ktpVillageId}
									onChange={(event, data) =>
										handleKtpFiledsChange(
											"ktpVillageId",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.ktpVillageId &&
										formik.errors.ktpVillageId && {
											content: formik.errors.ktpVillageId,
										}
									}
								/>
								<FormInput
									label="KTP Postal Code"
									name="ktpPostcode"
									onChange={(event, data) =>
										handleKtpFiledsChange(
											"ktpPostcode",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									value={formik.values.ktpPostcode}
									width="8"
									error={
										formik.touched.ktpPostcode &&
										formik.errors.ktpPostcode && {
											content: formik.errors.ktpPostcode,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<Form.Field>
									<Label>
										Is KTP address same as Domicile Adress?
									</Label>
									<Checkbox
										label={
											isKTPSameAsDomicile ? "Yes" : "No"
										}
										checked={
											formik.values.isKTPSameAsDomicile
										}
										onChange={(e, data) => {
											setIsKTPSameAsDomicile(
												data.checked
											);
											handleIsKTPSameAsDomicileChange(
												data.checked
											);
										}}
									/>
								</Form.Field>
							</Column>
							<br />
						</Row>
						{isKTPSameAsDomicile ? null : (
							<Fragment>
								<Row>
									<Form.Group>
										<FormInput
											label="Domisili Address"
											name="domicileAddress"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={
												formik.values.domicileAddress
											}
											width="8"
											error={
												formik.touched
													.domicileAddress &&
												formik.errors
													.domicileAddress && {
													content:
														formik.errors
															.domicileAddress,
												}
											}
										/>
										<Form.Field
											label="Domisili Province"
											name="domicileProvinceId"
											control={Select}
											search
											options={provinces}
											value={
												formik.values.domicileProvinceId
											}
											onChange={(event, data) => {
												formik.setFieldValue(
													"domicileProvinceId",
													data.value
												);
												fetchCities(
													data.value,
													setDomicileCities
												);
											}}
											onBlur={formik.handleBlur}
											width="8"
											error={
												formik.touched
													.domicileProvinceId &&
												formik.errors
													.domicileProvinceId && {
													content:
														formik.errors
															.domicileProvinceId,
												}
											}
										/>
									</Form.Group>
								</Row>
								<Row>
									<Form.Group>
										<Form.Field
											label="Domisili City"
											name="domicileCityId"
											control={Select}
											search
											options={domicileCities}
											value={formik.values.domicileCityId}
											onChange={(event, data) => {
												formik.setFieldValue(
													"domicileCityId",
													data.value
												);
												fetchSubDistricts(
													data.value,
													setDomicileSubDistricts
												);
											}}
											onBlur={formik.handleBlur}
											width="8"
											error={
												formik.touched.domicileCityId &&
												formik.errors
													.domicileCityId && {
													content:
														formik.errors
															.domicileCityId,
												}
											}
										/>
										<Form.Field
											label="Domisili Sub District"
											name="domicileSubDistrictId"
											control={Select}
											search
											options={domicileSubDistricts}
											value={
												formik.values
													.domicileSubDistrictId
											}
											onChange={(event, data) => {
												formik.setFieldValue(
													"domicileSubDistrictId",
													data.value
												);
												fetchVillages(
													data.value,
													setDomicileVillages
												);
											}}
											onBlur={formik.handleBlur}
											width="8"
											error={
												formik.touched
													.domicileSubDistrictId &&
												formik.errors
													.domicileSubDistrictId && {
													content:
														formik.errors
															.domicileSubDistrictId,
												}
											}
										/>
									</Form.Group>
								</Row>
								<Row>
									<Form.Group>
										<Form.Field
											label="Domisili Village"
											name="domicileVillageId"
											control={Select}
											search
											options={domicileVillages}
											value={
												formik.values.domicileVillageId
											}
											onChange={(event, data) =>
												formik.setFieldValue(
													"domicileVillageId",
													data.value
												)
											}
											onBlur={formik.handleBlur}
											width="8"
											error={
												formik.touched
													.domicileVillageId &&
												formik.errors
													.domicileVillageId && {
													content:
														formik.errors
															.domicileVillageId,
												}
											}
										/>
										<FormInput
											label="Domisili Postal Code"
											name="domicilePostcode"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={
												formik.values.domicilePostcode
											}
											width="8"
											error={
												formik.touched
													.domicilePostcode &&
												formik.errors
													.domicilePostcode && {
													content:
														formik.errors
															.domicilePostcode,
												}
											}
										/>
									</Form.Group>
								</Row>
							</Fragment>
						)}
						<Row>
							<Column width="16">
								<br />
								Facility
								<hr />
							</Column>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Facility Amount"
									name="facilityAmount"
									onChange={(e, data) => {
										if (data?.value) {
											formik.setFieldValue(
												"facilityAmount",
												data.value
											);
										}
									}}
									maxValue={2000000000}
									onBlur={formik.handleBlur}
									value={formik.values.facilityAmount}
									isCurrency={true}
									autocomplete="off"
									width="8"
									error={
										formik.touched.facilityAmount &&
										formik.errors.facilityAmount && {
											content:
												formik.errors.facilityAmount,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<br />
								Loan Detail
								<hr />
							</Column>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Purpose of Loan"
									name="loanPurpose"
									control={Select}
									options={loanPuposeOptions}
									value={formik.values.loanPurpose}
									onChange={(event, data) =>
										formik.setFieldValue(
											"loanPurpose",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.loanPurpose &&
										formik.errors.loanPurpose && {
											content: formik.errors.loanPurpose,
										}
									}
								/>
								{formik.values.loanPurpose ===
									"REPRESENTING_ANOTHER_PARTY" && (
									<FormInput
										label="Patient Name"
										name="patientName"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.patientName}
										width="8"
										error={
											formik.touched.patientName &&
											formik.errors.patientName && {
												content:
													formik.errors.patientName,
											}
										}
									/>
								)}
							</Form.Group>
						</Row>
						<Row>
							{formik.values.loanPurpose ===
								"REPRESENTING_ANOTHER_PARTY" && (
								<Form.Group>
									<FormInput
										label="Relationship with Applicant"
										name="relationshipWithApplicant"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={
											formik.values
												.relationshipWithApplicant
										}
										width="8"
										error={
											formik.touched
												.relationshipWithApplicant &&
											formik.errors
												.relationshipWithApplicant && {
												content:
													formik.errors
														.relationshipWithApplicant,
											}
										}
									/>
									<FileInput
										label="Family Card"
										name="familyCard"
										type="file"
										accept=".jpg,.jpeg,.png,.pdf,"
										selectedFile={formik.values.familyCard}
										preview={
											formik.values.familyCardPreview
										}
										onChange={(e) => {
											handleFileupload(e, "familyCard");
										}}
										onBlur={formik.handleBlur}
										onRemove={() =>
											removeFile("familyCard")
										}
										width="8"
										error={
											formik.touched.familyCard &&
											formik.errors.familyCard
										}
									/>
								</Form.Group>
							)}
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Contract Number"
									name="contractNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.contractNumber}
									width="8"
									error={
										formik.touched.contractNumber &&
										formik.errors.contractNumber && {
											content:
												formik.errors.contractNumber,
										}
									}
								/>
								<DatePickerInput
									inputTitle="Contract Date"
									dateFormat="YYYY-MM-DD"
									localization="id"
									onChange={(date) =>
										formik.setFieldValue(
											"contractDate",
											date
										)
									}
									value={formik.values.contractDate}
									errorMsg={formik.errors.contractDate}
									showErrorMessage={
										formik.touched.contractDate &&
										formik.errors.contractDate
									}
									placeholder="Contract Date"
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group widths="equal">
								<FormInput
									label="Loan Amount"
									name="loanAmount"
									isCurrency={true}
									autocomplete="off"
									onChange={(e, data) => {
										if (data?.value) {
											formik.setFieldValue(
												"loanAmount",
												data.value
											);
										}
									}}
									onBlur={formik.handleBlur}
									value={formik.values.loanAmount}
									error={
										formik.touched.loanAmount &&
										formik.errors.loanAmount && {
											content: formik.errors.loanAmount,
										}
									}
								/>
								<FormInput
									label="Loan Tenure"
									name="loanTenure"
									type="number"
									min="0"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.loanTenure}
									allowNegative={false}
									error={
										formik.touched.loanTenure &&
										formik.errors.loanTenure && {
											content: formik.errors.loanTenure,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<br />
								Occupation & Income
								<hr />
							</Column>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Emplyment Status"
									name="employmentStatus"
									control={Select}
									options={employmentStatusOptions}
									value={formik.values.employmentStatus}
									onChange={(event, data) =>
										formik.setFieldValue(
											"employmentStatus",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.employmentStatus &&
										formik.errors.employmentStatus && {
											content:
												formik.errors.employmentStatus,
										}
									}
								/>
								<Form.Field
									label="Length of work"
									name="lengthOfWork"
									control={Select}
									options={lengthOfWorkOptions}
									value={formik.values.lengthOfWork}
									onChange={(event, data) =>
										formik.setFieldValue(
											"lengthOfWork",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.lengthOfWork &&
										formik.errors.lengthOfWork && {
											content: formik.errors.lengthOfWork,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Occupation Type"
									name="occupationId"
									control={Select}
									search
									options={occupations}
									value={formik.values.occupationId}
									onChange={(event, data) => {
										formik.setFieldValue(
											"occupationId",
											data.value
										);
									}}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.occupationId &&
										formik.errors.occupationId && {
											content: formik.errors.occupationId,
										}
									}
								/>
								<FormInput
									label="Industry"
									name="industry"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.industry}
									width="8"
									error={
										formik.touched.industry &&
										formik.errors.industry && {
											content: formik.errors.industry,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Company's Name"
									name="companyName"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.companyName}
									width="8"
									error={
										formik.touched.companyName &&
										formik.errors.companyName && {
											content: formik.errors.companyName,
										}
									}
								/>
								<FormInput
									label="Company Address"
									name="companyAddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.companyAddress}
									width="8"
									error={
										formik.touched.companyAddress &&
										formik.errors.companyAddress && {
											content:
												formik.errors.companyAddress,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Company Province"
									name="companyProvinceId"
									control={Select}
									search
									options={provinces}
									value={formik.values.companyProvinceId}
									onChange={(event, data) => {
										formik.setFieldValue(
											"companyProvinceId",
											data.value
										);
										fetchCities(
											data.value,
											setCompanyCities
										);
									}}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.companyProvinceId &&
										formik.errors.companyProvinceId && {
											content:
												formik.errors.companyProvinceId,
										}
									}
								/>
								<Form.Field
									label="Company City"
									name="companyCityId"
									control={Select}
									search
									options={companyCities}
									value={formik.values.companyCityId}
									onChange={(event, data) => {
										formik.setFieldValue(
											"companyCityId",
											data.value
										);
										fetchSubDistricts(
											data.value,
											setCompanySubDistricts
										);
									}}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.companyCityId &&
										formik.errors.companyCityId && {
											content:
												formik.errors.companyCityId,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Company Sub District"
									name="companySubDistrictId"
									control={Select}
									search
									options={companySubDistricts}
									value={formik.values.companySubDistrictId}
									onChange={(event, data) => {
										formik.setFieldValue(
											"companySubDistrictId",
											data.value
										);
										fetchVillages(
											data.value,
											setCompanyVillages
										);
									}}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.companySubDistrictId &&
										formik.errors.companySubDistrictId && {
											content:
												formik.errors
													.companySubDistrictId,
										}
									}
								/>
								<Form.Field
									label="Company Village"
									name="companyVillageId"
									control={Select}
									search
									options={companyVillages}
									value={formik.values.companyVillageId}
									onChange={(event, data) =>
										formik.setFieldValue(
											"companyVillageId",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.companyVillageId &&
										formik.errors.companyVillageId && {
											content:
												formik.errors.companyVillageId,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Company's Phone Number"
									name="companyPhoneNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.companyPhoneNumber}
									width="8"
									error={
										formik.touched.companyPhoneNumber &&
										formik.errors.companyPhoneNumber && {
											content:
												formik.errors
													.companyPhoneNumber,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Monthly Net Income"
									name="monthlyNetIncome"
									isCurrency={true}
									autocomplete="off"
									onChange={(e, data) => {
										if (data?.value) {
											formik.setFieldValue(
												"monthlyNetIncome",
												data.value
											);
										}
									}}
									onBlur={formik.handleBlur}
									value={formik.values.monthlyNetIncome}
									width="8"
									error={
										formik.touched.monthlyNetIncome &&
										formik.errors.monthlyNetIncome && {
											content:
												formik.errors.monthlyNetIncome,
										}
									}
								/>
								<FormInput
									label="Payday Date"
									name="paydayDate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.paydayDate}
									width="8"
									error={
										formik.touched.paydayDate &&
										formik.errors.paydayDate && {
											content: formik.errors.paydayDate,
										}
									}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group>
								<Form.Field
									label="Financial Document type"
									name="financialDocumentType"
									control={Select}
									options={financialDocumentOptions}
									value={formik.values.financialDocumentType}
									onChange={(event, data) =>
										formik.setFieldValue(
											"financialDocumentType",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched.financialDocumentType &&
										formik.errors.financialDocumentType && {
											content:
												formik.errors
													.financialDocumentType,
										}
									}
								/>
								{formik.values.financialDocumentType ===
									"SALARY_SLIP" && (
									<FileInput
										label="Salary Slip Document"
										name="salarySlip"
										type="file"
										accept=".jpg,.jpeg,.png,.pdf,"
										selectedFile={formik.values.salarySlip}
										preview={
											formik.values.salarySlipPreview ||
											(formik.values.salarySlip &&
												apiUrl +
													formik.values.salarySlip)
										}
										onChange={(e) => {
											handleFileupload(e, "salarySlip");
										}}
										onBlur={formik.handleBlur}
										onRemove={() =>
											removeFile("salarySlip")
										}
										error={
											formik.touched.salarySlip &&
											formik.errors.salarySlip
										}
									/>
								)}
								{formik.values.financialDocumentType ===
									"BANK_STATEMENT" && (
									<FileInput
										label="Bank Statement Document"
										name="bankStatement"
										type="file"
										accept=".jpg,.jpeg,.png,.pdf,"
										selectedFile={
											formik.values.bankStatement
										}
										preview={
											formik.values
												.bankStatementPreview ||
											(formik.values.bankStatement &&
												apiUrl +
													formik.values.bankStatement)
										}
										onChange={(e) => {
											handleFileupload(
												e,
												"bankStatement"
											);
										}}
										onBlur={formik.handleBlur}
										onRemove={() =>
											removeFile("bankStatement")
										}
										error={
											formik.touched.bankStatement &&
											formik.errors.bankStatement
										}
									/>
								)}
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<br />
								Other Income
								<hr />
							</Column>
						</Row>
						<Row>
							<Form.Group>
								<FormInput
									label="Other Income"
									name="otherIncome"
									isCurrency={true}
									autocomplete="off"
									onChange={(e, data) => {
										if (data) {
											formik.setFieldValue(
												"otherIncome",
												data.value
											);
										}
									}}
									onBlur={formik.handleBlur}
									value={formik.values.otherIncome}
									width="8"
									error={
										formik.touched.otherIncome &&
										formik.errors.otherIncome && {
											content: formik.errors.otherIncome,
										}
									}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Field
									label="Spouse's Financial Document Type"
									name="spouseFinancialDocumentType"
									control={Select}
									options={financialDocumentOptions}
									value={
										formik.values
											.spouseFinancialDocumentType
									}
									onChange={(event, data) =>
										formik.setFieldValue(
											"spouseFinancialDocumentType",
											data.value
										)
									}
									onBlur={formik.handleBlur}
									width="8"
									error={
										formik.touched
											.spouseFinancialDocumentType &&
										formik.errors
											.spouseFinancialDocumentType && {
											content:
												formik.errors
													.spouseFinancialDocumentType,
										}
									}
								/>
								{formik.values.spouseFinancialDocumentType ===
									"SALARY_SLIP" && (
									<FileInput
										label="Spouse's Salary Slip"
										name="spouseSalarySlip"
										type="file"
										accept=".jpg,.jpeg,.png,.pdf,"
										selectedFile={
											formik.values.spouseSalarySlip
										}
										preview={
											formik.values
												.spouseSalarySlipPreview ||
											(formik.values.spouseSalarySlip &&
												apiUrl +
													formik.values
														.spouseSalarySlip)
										}
										bankStatementPreview
										onChange={(e) => {
											handleFileupload(
												e,
												"spouseSalarySlip"
											);
										}}
										onBlur={formik.handleBlur}
										onRemove={() =>
											removeFile("spouseSalarySlip")
										}
										error={
											formik.touched.spouseSalarySlip &&
											formik.errors.spouseSalarySlip
										}
									/>
								)}
								{formik.values.spouseFinancialDocumentType ===
									"BANK_STATEMENT" && (
									<FileInput
										label="Spouse's Bank Statement"
										name="spouseBankStatement"
										type="file"
										accept=".jpg,.jpeg,.png,.pdf,"
										selectedFile={
											formik.values.spouseBankStatement
										}
										preview={
											formik.values
												.spouseBankStatementPreview ||
											(formik.values
												.spouseBankStatement &&
												apiUrl +
													formik.values
														.spouseBankStatement)
										}
										onChange={(e) => {
											handleFileupload(
												e,
												"spouseBankStatement"
											);
										}}
										onBlur={formik.handleBlur}
										onRemove={() =>
											removeFile("spouseBankStatement")
										}
										error={
											formik.touched
												.spouseBankStatement &&
											formik.errors.spouseBankStatement
										}
									/>
								)}
							</Form.Group>
						</Row>
						<Row>
							<Column width="16">
								<br />
								Emergency Contact
								<hr />
							</Column>
						</Row>
						<Row>
							<Column width="16">
								<h5 style={{ paddingBottom: "8px" }}>
									Emergency Contact 1
								</h5>
							</Column>
						</Row>
						<Row>
							<Form.Group widths="equal">
								<FormInput
									label="Name"
									name="emergencyContact1Name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.emergencyContact1Name}
									error={
										formik.touched.emergencyContact1Name &&
										formik.errors.emergencyContact1Name && {
											content:
												formik.errors
													.emergencyContact1Name,
										}
									}
								/>
								<FormInput
									label="Relationship"
									name="emergencyContact1Relationship"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={
										formik.values
											.emergencyContact1Relationship
									}
									error={
										formik.touched
											.emergencyContact1Relationship &&
										formik.errors
											.emergencyContact1Relationship && {
											content:
												formik.errors
													.emergencyContact1Relationship,
										}
									}
								/>
								<FormInput
									label="Phone Number"
									name="emergencyContact1PhoneNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={
										formik.values
											.emergencyContact1PhoneNumber
									}
									error={
										formik.touched
											.emergencyContact1PhoneNumber &&
										formik.errors
											.emergencyContact1PhoneNumber && {
											content:
												formik.errors
													.emergencyContact1PhoneNumber,
										}
									}
								/>
							</Form.Group>
							<Row>
								<Column width="16">
									<h5 style={{ padding: "8px 0" }}>
										Emergency Contact 2
									</h5>
								</Column>
							</Row>
							<Form.Group widths="equal">
								<FormInput
									label="Name"
									name="emergencyContact2Name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.emergencyContact2Name}
									error={
										formik.touched.emergencyContact2Name &&
										formik.errors.emergencyContact2Name && {
											content:
												formik.errors
													.emergencyContact2Name,
										}
									}
								/>
								<FormInput
									label="Relationship"
									name="emergencyContact2Relationship"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={
										formik.values
											.emergencyContact2Relationship
									}
									error={
										formik.touched
											.emergencyContact2Relationship &&
										formik.errors
											.emergencyContact2Relationship && {
											content:
												formik.errors
													.emergencyContact2Relationship,
										}
									}
								/>
								{/* <FormInput
									label="Phone Number"
									name="emergencyContact2PhoneNumber"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={
										formik.values
											.emergencyContact2PhoneNumber
									}
									error={
										formik.touched
											.emergencyContact2PhoneNumber &&
										formik.errors
											.emergencyContact2PhoneNumber && {
											content:
												formik.errors
													.emergencyContact2PhoneNumber,
										}
									}
								/> */}
							{/* </Form.Group>
						</Row>  */}
						<br />
						<Row centered>
							<FunctionButton
								content="Save"
								color="blue"
								type="submit"
								loading={isSubmitting}
								disabled={
									isSubmitting ||
									Object.keys(formik.errors).length > 0 ||
									Object.keys(formik.values).length === 0
								}
							/>
						</Row>
					</DefaultForm>
				</Dimmer.Dimmable>
			</Layout>
		</>
	);
};

function mapStateToProps(state, ownProps) {
	return {
		userData: state.reducer.Users.userData,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(UserDetail)
);