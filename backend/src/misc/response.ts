export const Responses = {
  SuccessData:<T=any>(data?: T) =>({
    message: "success",
    data: data
  })
}