export default function sanityzeZipCode(zipCode: string | undefined): string | undefined {
  return zipCode?.replaceAll('-', '')
}
