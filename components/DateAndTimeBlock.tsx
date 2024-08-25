"use client";

import { useEffect, useState } from "react";

const DateAndTimeBlock = () => {
	const [locale, setLocale] = useState("ru-RU"); // Default to Minsk/Moscow

	useEffect(() => {
		// Update locale if navigator is available
		if (typeof navigator !== "undefined") {
			console.log(navigator.language);

			setLocale(navigator.language || "ru-RU");
		}
	}, []);

	const now = new Date();
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const time = now.toLocaleTimeString(locale, {
		timeZone,
		hour: "2-digit",
		minute: "2-digit",
	});

	const date = new Intl.DateTimeFormat(locale, {
		dateStyle: "full",
		timeZone,
	}).format(now);

	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
			<p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
		</div>
	);
};

export default DateAndTimeBlock;
