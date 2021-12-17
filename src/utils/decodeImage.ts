export const decodeImageUrl = (urlEncoded: string): string => {
  return urlEncoded.replace('amp;s', 's')
}
