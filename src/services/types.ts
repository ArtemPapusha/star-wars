export interface ResultDataType {
  uid: string;
  name: string;
  url: string;
}
export interface DataType {
  message: string;
  total_records: number;
  total_pages: number;
  previous: number | null;
  next: string;
  results: ResultDataType[];
}
