// Alpha-2 country code (2 letters)
export function flagUrl(alpha2Code: string) {
  return `http://www.geonames.org/flags/x/${alpha2Code.toLowerCase()}.gif`;
}
