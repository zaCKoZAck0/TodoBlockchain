import { FC, useState, useContext } from "react";
import Card from "./Cards";
import { List as ListType} from "../interfaces";
import { AddNote } from "../interfaces";
import { ListContext } from "../listContext";
import { ethers } from "ethers";
import TodoList from '../../contract/artifacts/contracts/TodoList.sol/TodoLists.json'
import {CONTRACT_ADDRESS} from '../config'

interface ListProps {
    list: ListType;
}


export const AddList = () => {

    const {setRefresh} = useContext(ListContext);
    const [loading, setLoading] = useState(false);
    const onAddList = (list:{name: string}) => {
    async function addList() {
      setLoading(true);
    try {
     const {ethereum} = window as any;
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS,TodoList.abi, signer)
    await contract.addList(list.name);
    setLoading(false);
    setRefresh && setRefresh((prev)=>(!prev))
    alert("List Added")
    } catch (error) {
        alert(error)
    }
  }

            addList();
            setName('')
    }

    const [name, setName] = useState('');
    return <div className={`bg-gray h-[50px] flex justify-between text-textGray rounded-[12px] font-semibold text-[16px] mb-1 mt-[18px] p-3 mx-2 w-[286.65px] ${loading?"animate-pulse":""}`}>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray placeholder:text-textGray font-bold" placeholder="Add Todo" type="text" />
        <span onClick={()=>onAddList({name: name})} className="h-[25px] w-[25px] cursor-pointer scale-110 bg-btnGray text-white rounded-full flex items-center justify-center"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4939 5.34077V8.73452H0V5.34077H13.4939ZM8.59931 0V14.3322H4.9081V0H8.59931Z" fill="white"/>
</svg>
</span>
        </div> 
}

export const List: FC<ListProps> = ({list}) => {
    const {setRefresh} = useContext(ListContext);
    const [loading, setLoading] = useState(false)
    const {name, notes} = list;

    const onAddNote = (note:AddNote) => {
    async function addNotes() {
    try {
    const {ethereum} = window as any;
    setLoading(true);
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS,TodoList.abi, signer)
    await contract.addTodo(note.listId, note.todo, note.description);
    setRefresh && setRefresh((prev)=>(!prev))
    alert("Todo Added")
    setLoading(false);
    } catch (error) {
        alert(error)
    }
  }
    addNotes();
    }

    return (<div className="h-full">
        <div className={`bg-gray rounded-[12px] font-semibold text-[16px] mt-[18px] p-3 mb-1 mx-2 w-[286.65px] ${loading?"animate-pulse":""}`}>
            {name===''?"List : Empty List":`List: ${name}`}
        </div>

    <div className="transition-all duration-1000 z-0">
        <Card cardType="empty" listId={list.id} addNote={onAddNote} />
        {
            notes.map((note)=> {
                return(<Card key={note.id} listId={list.id} cardType="saved" noteVal={note} addNote={onAddNote} />);
            })
        }
    </div>
    </div>)
}
