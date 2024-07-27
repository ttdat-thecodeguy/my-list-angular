// generate model todo 
export interface Todo {
    id: number | 0;
    name: string;
    desc: string;
    completed: boolean | false;
    editMode: boolean | false;
}