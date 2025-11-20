export function formatPhoneNumber(countryCode: number | undefined, number: string): string {
const formattedNumber = splitNumber(number);
return countryCode ? `+${countryCode} ${formattedNumber}` : formattedNumber;
}

export function splitNumber(number: string, step: number = 3, separator: string = ' '): string {
console.log(number)
		const splitNumber = [number.slice(0, step), number.slice(step, 2 * step), number.slice(2 * step, 3 * step)]
console.log(splitNumber)
	 return splitNumber.join(separator);
}