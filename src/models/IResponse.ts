export interface IResponse<D> {
  status: boolean;
  message: string;
  data: D;
}
