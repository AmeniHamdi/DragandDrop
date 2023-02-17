import { Column } from './column.model';
import { Todo } from './todo.model';

export class Board {
  constructor(public name: string, public columns: Column[]) {}
}
