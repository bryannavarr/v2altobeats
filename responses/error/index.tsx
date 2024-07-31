export const responseErrorHandler = (error: any) => {
    console.log(error);
    return Promise.reject(error);
  };