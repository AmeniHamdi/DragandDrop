import { Todo } from "./todo.model";

export class Column {
  constructor(public name: string, public id: number, public tasks: Todo[]) {}
}
