module.exports = defaultLanguage => { 
	return {
		month: (month = new Date().getMonth() + 1, language = defaultLanguage) => {
			return getGems(parseMonth(month), 'month', parseLanguage(language));
		},
		day: (day = new Date().getDay() + 1, language = defaultLanguage) => {
			return getGems(parseDay(day), 'day', parseLanguage(language));
		}
	}
}

const getGems = (date, namespace, language) => {
	let gemsData;
	try {
		gemsData = require(`./locales/${language}/birthstones_${namespace}.json`);
	}
	catch {
		gemsData = require(`./locales/en/birthstones_${namespace}.json`);
	}

	// Error code
	if (date < 0) {
		return date;
	}

	return Object.values(gemsData)[date];
}

const parseMonth = month => {
	// January: 1; December: 12
	if (!Number.isInteger(month) || month === null || month < 1 || month > 12) {
		return -1;
	}
	return month - 1;
}

const parseDay = day => {
	// Monday: 1; Sunday: 7
	if (!Number.isInteger(day) || day < 1 || day > 7) {
		return -2;
	}
	return day - 1;
}

const parseLanguage = language => {
	const regex = new RegExp('^[a-z]{2}(-[A-Z]{2})?$');  // xx-YY

	// Language format (xx-YY) verification
	if (regex.test(language)) {
		language = language.substring(0, 2);
	}

	return language;
}