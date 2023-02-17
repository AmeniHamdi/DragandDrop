export interface Todo {
  id: number;
  title: string;
  description: string;
  status: Status
  
 }
 export enum Status {
  TODO = "TODO",
  IN_PRPGRESS = "IN_PRPGRESS",
  DONE = "DONE"
}