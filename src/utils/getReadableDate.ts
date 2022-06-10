//get readable date
export const getReadableDate = (utcDate:number | undefined):string => {
  if (!utcDate) {
    return 'Invalid Date'
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  // @ts-ignore
  return new Date(utcDate).toLocaleDateString(undefined, options)
}