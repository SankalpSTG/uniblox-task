export const RequestMethods = {
  get: "get",
  post: "post",
}

export type ResponseType<T=any> = {
  message: string,
  data: T,
}

export type RequestType = {
  url: string,
  query?: any,
  body?: any,
}