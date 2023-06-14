export type ApiResponseBody<T = unknown> = {
  data: T;
  isSuccess: boolean;
  error?: string;
  message: string;
};
