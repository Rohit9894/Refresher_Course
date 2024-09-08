export type Todo = {
  title: string;
  status: boolean;
  id?: number;
};
enum priority {
  "low",
  "medium",
  "high",
}
export type Task = {
  title: string;
  status?: boolean;
  priority?: priority | string;
  description: string;
  id?: string;
};
