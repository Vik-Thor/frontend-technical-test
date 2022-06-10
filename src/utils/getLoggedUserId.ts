import type { User } from '../types/user'

// Default way to use a logged user
// Feel free to update the user ID for your tests
// or enhance it with better data source, or better user management
export const getLoggedUserId = ():User['id'] => 1

//simple classNames function
export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(" ")

//get first letter and uppercase it
export const getFirsCharAndUpper = (str: string): string => str.charAt(0).toUpperCase()