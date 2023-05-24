import React,{createContext} from "react";
import { List, Note } from "./interfaces";

export const ListContext = createContext<{refresh: boolean, setRefresh:React.Dispatch<React.SetStateAction<boolean>> | null, setCurrentAccount:React.Dispatch<React.SetStateAction<string>> | null, currentAccount: string | null, setEditingNote:React.Dispatch<React.SetStateAction<Note & {listId: string} | null>> | null, setEditOpen: React.Dispatch<React.SetStateAction<boolean>> | null,editingNote: Note & {listId: string} | null, editOpen: boolean, lists: List[]; setLists: React.Dispatch<React.SetStateAction<List[]>> | null }>({
  lists: [],
  setLists: null,
  editOpen: false,
  setEditOpen: null,
  editingNote: null,
  setEditingNote: null,
  currentAccount: null,
  setCurrentAccount: null,
  refresh: true,
  setRefresh: null,
});
