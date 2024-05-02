export type Task = {
  id: number;
  title: string;
  completed: boolean;
  categoryId: string;
};

export type TaskList = Task[];

export const defaultTaskList: TaskList = [
  {
    id: 1,
    title: 'Task 1',
    completed: false,
    categoryId: '1',
  },
  {
    id: 2,
    title: 'Task 2',
    completed: false,
    categoryId: '1',
  },
  {
    id: 3,
    title: 'Task 3',
    completed: false,
    categoryId: '2',
  },
  {
    id: 4,
    title: 'Task 4',
    completed: false,
    categoryId: '2',
  },
  {
    id: 5,
    title: 'Task 5',
    completed: false,
    categoryId: '3',
  },
];
