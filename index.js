const axios = require('axios');

module.exports = async content => {
	if (!content) throw Error('Please provide a content.');
	const body = await axios.get(`https://bryendaco.github.io/char2utf8.json`);

	const inputSplit = content.split("");
	let c2uResult = [];

	const data = body.data;

	inputSplit.forEach(async oneByOne => {
		const replacement = data[oneByOne];

		if (!!replacement) {
			await c2uResult.push(replacement);
		} else await c2uResult.push(oneByOne);
	});

	return c2uResult.join("");
}