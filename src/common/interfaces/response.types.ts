export interface ResponseContent<T = Record<string, unknown>> {
  readonly data: T;
}
