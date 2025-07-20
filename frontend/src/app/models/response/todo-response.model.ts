import { Todo } from "../todo.model";

export interface TodosResponse {
  data: Todo[];
  sucesso?: boolean;
  fake?: boolean;
}
