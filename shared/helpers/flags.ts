// Alpha-2 country code (2 letters)
export function flagUrl(countryCode: string) {
  return `http://www.geonames.org/flags/x/${countryCode.toLowerCase()}.gif`;
}
