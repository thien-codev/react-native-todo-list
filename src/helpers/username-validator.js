export function usernameValidator(username) {
    const usernameRegex = /^[A-Za-z0-9]+$/
    if (!username) return "Username can't be empty."
    if (!usernameRegex.test(username)) return "Ooops! We need a valid username."
    return ""
}