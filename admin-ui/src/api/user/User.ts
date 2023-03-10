import { Task } from "../task/Task";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  asssignedTo?: Array<Task>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
