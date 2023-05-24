import { FC, useContext, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ListContext } from '../listContext';
import { ethers } from 'ethers';
import { Note } from '../interfaces';
import TodoList from '../../contract/artifacts/contracts/TodoList.sol/TodoLists.json'
import { Loader2 } from 'lucide-react';
import {CONTRACT_ADDRESS} from '../config'

interface SideBarProps {
  isOpen: boolean;
}



const SideBar: FC<SideBarProps> = ({ isOpen }) => {
const {editingNote, setEditOpen } = useContext(ListContext);
const [todo, setTodo] = useState<Note>(editingNote as Note);
const [loading, setLoading] = useState(false)

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      todo: event.target.value
    });
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodo({
      ...todo,
      description: event.target.value
    });
  };

  const handleOnClickSave = async () => {
    setLoading(true);
    async function updateTodo() {
    try {
     const {ethereum} = window as any;
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS,TodoList.abi, signer)
    await contract.updateTodo( todo.id, editingNote?.listId, todo.todo, todo.description);
    setLoading(false);
    setEditOpen && setEditOpen(false);
     } catch (error) {
        alert(error)
        console.log(error)
    }
  }

            await updateTodo();
            setTimeout(() => {
              window.location.reload();
              alert("Updated Todo")
            }, 2000);
            
  }

useEffect(() => {
  setTodo(editingNote as Note);
}, [editingNote]);


    return (
<Transition
  show={isOpen}
  enter="transition-transform duration-500"
  enterFrom="translate-x-full"
  enterTo="translate-x-0"
  leave="transition-transform duration-500"
  leaveFrom="translate-x-0"
  leaveTo="translate-x-full"
>
      <div className="border-l-2 border-t-4 border-gray bg-black text-white w-80 h-screen fixed top-0 right-0 z-50">
        <div className='flex justify-start m-8 ml-4 mb-0'>
        <div className='flex items-center'>
        <svg onClick={()=>setEditOpen && setEditOpen(false)} className='mr-3 cursor-pointer' width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.147257 4.72344L4.02377 0.519623L4.735 1.2909L1.71708 4.56362H10.5626C10.8407 4.56362 11.0656 4.80799 11.0656 5.10908C11.0656 5.41017 10.8407 5.65453 10.5626 5.65453H1.71708L4.735 8.92726L4.02377 9.69853L0.147257 5.49471C-0.0494111 5.28144 -0.0494111 4.93671 0.147257 4.72344Z" fill="white"/>
</svg>
 <span className='ml-2 text-[18px] font-normal'>Edit Todo</span>
        </div></div>
        <div className='flex flex-col items-center justify-center'>
        <input placeholder='Todo' className='bg-gray rounded-[12px] font-semibold text-[20px] mt-[18px] p-2 mb-2 mx-2 w-[286.65px]' type="text"
        onChange={handleInputChange}
        value={todo?.todo} />
        <textarea
        onChange={handleTextareaChange}
        placeholder='Description' className='text-[14px] bg-gray flex justify-between text-textGray rounded-[12px] font-normal mb-1 p-3 mx-2 w-[286.65px]' cols={30} rows={2} value={todo?.description} />
        <button
        onClick={handleOnClickSave}
        className='bg-blue-500 w-[95px] mt-[25px] h-[34px] text-center flex items-center justify-center text-[14px] rounded-[10px] font-normal'  type='submit'>
            {loading?(<Loader2 className='animate-spin mr-2' />):"Save"}
        </button></div>
      </div>
    </Transition>
  );
};

export default SideBar;
