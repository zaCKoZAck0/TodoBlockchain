

export interface Note {
    id: string;
    todo: string;
    description: string;
}

export interface List {
    id: string;
    name: string;
    notes: Note[];
}


export interface ListState {
    lists: List[];
}

export interface AddNote {
  listId: string;
  todo: string;
  description: string;
}

export interface EditNote {
  listId: string;
  id: string;
  todo: string;
  description: string;
}

export interface AddList {
  name: string;
}
