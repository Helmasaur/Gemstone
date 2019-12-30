
module.exports = defaultLanguage => { // Language format (xx-YY) verification

	return {
		month: (month = new Date().getMonth() + 1, language = defaultLanguage) => {
			return getGems(parseMonth(month), 'month', parseLanguage(language));
		},
		day: (day = new Date().getDay() + 1, language = defaultLanguage) => {
			return getGems(parseDay(day), 'day', parseLanguage(language));
		},
		zodiac: (sign, language = defaultLanguage) => {
			language = parseLanguage(language);
			return getGems(parseZodiac(sign, language), 'zodiac', language)
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

const parseZodiac = (sign, language) => {
	if (typeof sign !== 'string' || typeof sign === 'undefined' || sign === null) {
		return -3;
	}

	let astrologyData;
	try {
		astrologyData = require(`./locales/${language}/astrology.json`);
	}
	catch {
		astrologyData = require('./locales/en/astrology.json');
	}

	switch (sign.toLowerCase()) {
		case Object.values(astrologyData)[0]:
		case '♈':
			return 0;
		case Object.values(astrologyData)[1]:
		case '♉':
			return 1;
		case Object.values(astrologyData)[2]:
		case '♊':
			return 2;
		case Object.values(astrologyData)[3]:
		case '♋':
			return 3;
		case Object.values(astrologyData)[4]:
		case '♌':
			return 4;
		case Object.values(astrologyData)[5]:
		case '♍':
			return 5;
		case Object.values(astrologyData)[6]:
		case '♎': 
			return 6;
		case Object.values(astrologyData)[7]:
		case '♏':
			return 7;
		case Object.values(astrologyData)[8]:
		case '♐':
			return 8;
		case Object.values(astrologyData)[9]:
		case '♑':
			return 9;
		case Object.values(astrologyData)[10]:
		case '♒':
			return 10;
		case Object.values(astrologyData)[11]:
		case '♓':
			return 11;
		default:
			return -3;
	}
}

const parseLanguage = language => {
	const regex = new RegExp('^[a-z]{2}(-[A-Z]{2})?$');  // xx-YY

	if (regex.test(language)) {
		language = language.substring(0, 2);
	}

	return language;
}