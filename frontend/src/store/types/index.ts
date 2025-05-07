export type ErrorBody = {
  message?: string
  error?: string
  statusCode?: string
}
export type ErrorType = {
  rejectValue: ErrorBody
}