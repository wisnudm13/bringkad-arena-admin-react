import React from "react";
import moment from "moment";
import "moment/locale/id";
import { includes } from "lodash";

const ToTitleCase = (str) => {
	if (includes(str, "_")) {
		let txt = str.toLowerCase().split("_");

		for (let i = 0; i < txt.length; i++) {
			txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
		}

		return txt.join(" ");
	}

	return (
		str &&
		str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		})
	);
};

const Localize = (date) => {
	let hour = parseInt(`${moment(date).format("HH")}`);
	let meridien = hour >= 12 && hour < 24 ? "PM" : "AM";

	return `${moment(date).format("MM/DD/YYYY hh:mm")} ${meridien} UTC`;
};

const DateTimeDocument = (timestamp) => {
	moment.locale("en");
	return moment(moment.utc(timestamp).toDate())
		.local()
		.format("DD/MM/YYYY hh:mm A");
};

const DateScreening = (param) => {
	if (param) {
		let tempDate = param.split("-");
		if (tempDate[0].length === 2) {
			return moment(param, "DD/MM/YYYY").format("DD MMMM YYYY");
		} else if (tempDate[0].length === 4) {
			return moment(param).format("DD MMMM YYYY");
		}
	} else {
		return "-";
	}
};

const DateFormater = (dateInput, isInline, dateFormat) => {
	if (dateFormat) {
		return `${moment(dateInput, dateFormat).format("dddd")}${
			isInline ? `${", "}` : <br />
		}${moment(dateInput, dateFormat).format("DD MMMM YYYY")}`;
	} else {
		return `${moment(dateInput).format("dddd")}${
			isInline ? `${", "}` : <br />
		}${moment(dateInput).format("DD MMMM YYYY")}`;
	}
};

const NumberFormater = ({
	isCurrency,
	isPercentage,
	isNotRoundUp,
	isDay,
	isMonth,
	isYear,
	minDecimal,
	maxDecimal,
	value,
	prefix,
	suffix,
}) => {
	if (value !== undefined && value !== "") {
		if (isCurrency) {
			if (typeof value !== "string") {
				return `${
					Math.sign(value) === -1 ? "-" : ""
				}Rp${Intl.NumberFormat("id-ID", {
					minimumFractionDigits: minDecimal ? minDecimal : 0,
					maximumFractionDigits: maxDecimal ? maxDecimal : 0,
				}).format(
					Math.sign(value) === -1
						? value.toString().split("-").slice(1)
						: value
				)}`;
			}

			return value;
		} else if (isPercentage) {
			if (isNotRoundUp) {
				return `${Intl.NumberFormat("id-ID").format(value)}%`;
			}

			return `${Intl.NumberFormat("id-ID", {
				minimumFractionDigits: minDecimal ? minDecimal : 0,
				maximumFractionDigits: maxDecimal ? maxDecimal : 0,
			}).format(value)}%`;
		} else if (isDay) {
			return `${Intl.NumberFormat("id-ID").format(value)} Hari`;
		} else if (isMonth) {
			return `${Intl.NumberFormat("id-ID").format(value)} Bulan`;
		} else if (isYear) {
			return `${Intl.NumberFormat("id-ID").format(value)} Tahun`;
		}

		return `${prefix ? prefix : ""}${Intl.NumberFormat("id-ID", {
			minimumFractionDigits: minDecimal ? minDecimal : 0,
			maximumFractionDigits: maxDecimal ? maxDecimal : 0,
		}).format(value)}${suffix ? suffix : ""}`;
	}

	return null;
};

const formatImageName = (img) => {
	let imgSplit = img.split("/");
	let imgName = imgSplit[imgSplit.length - 1];
	return imgName;
};

const validateImageExtension = (img) => {
	let imgSplit = img.split(".");
	let imgName = imgSplit[imgSplit.length - 1];
	let allowedExt = ["xls", "xlsx", "csv", "doc", "docx"];
	if (allowedExt.includes(imgName.toLowerCase())) {
		return false;
	} else {
		return true;
	}
};

const currencyFormat = (amount) => {
	if (!amount) return "Rp 0";
	return `${Math.sign(amount) === -1 ? "-" : ""}Rp${Intl.NumberFormat(
		"id-ID",
		{
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}
	).format(
		Math.sign(amount) === -1
			? amount.toString().split("-").slice(1)
			: amount
	)}`;
};

const removeLeadingZero = (param) => {
	let splitted = param.split("/");
	let result = "";
	for (let i = 0; i < splitted.length; i++) {
		let splittedNumber = splitted[i];
		while (splittedNumber[0] === "0") {
			splittedNumber = splittedNumber.substring(1);
		}

		result =
			i + 1 === splitted.length
				? result + splittedNumber
				: result + splittedNumber + "/";
	}
	return result;
};

function ArrayMove(arr, old_index, new_index) {
	while (old_index < 0) {
		old_index += arr.length;
	}
	while (new_index < 0) {
		new_index += arr.length;
	}
	if (new_index >= arr.length) {
		let k = new_index - arr.length;
		while (k-- + 1) {
			arr.push(undefined);
		}
	}
	arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
	return arr;
}

export {
	ToTitleCase,
	DateTimeDocument,
	DateScreening,
	DateFormater,
	NumberFormater,
	Localize,
	formatImageName,
	validateImageExtension,
	currencyFormat,
	removeLeadingZero,
	ArrayMove,
};
