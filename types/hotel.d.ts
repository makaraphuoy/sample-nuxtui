export type Product = {
  id: number;
  name: string;
  image: string;
}
export type Param = {
  location: string;
  from_date: Date | null;
  to_date: Date | null;
}