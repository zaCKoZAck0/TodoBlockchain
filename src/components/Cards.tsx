import { Trophy } from "lucide-react";
import { useContext, useState } from "react";
import { ListContext } from "../listContext";
import { Note } from "../interfaces";

interface CardProps{
  addNote({todo, description, listId}:{todo:string, description?:string, listId: string}): void;
  cardType: 'empty' | 'saved';
  noteVal?: {todo:string, description:string, id: string};
  listId: string;
}

const Card: React.FC<CardProps> = ({addNote=null, cardType, noteVal={todo:'',description:''}, listId }) => {
  const [note, setNotes] = useState(noteVal)
  const Icon = cardType==='empty'?<svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4939 5.34077V8.73452H0V5.34077H13.4939ZM8.59931 0V14.3322H4.9081V0H8.59931Z" fill="white"/>
</svg>
:<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2189 0C12.8777 0 12.5365 0.130292 12.2761 0.390625L10.6667 2L14.0001 5.33333L15.6095 3.72396C16.1302 3.20329 16.1302 2.35921 15.6095 1.83854L14.1616 0.390625C13.9012 0.130292 13.56 0 13.2189 0ZM9.33341 3.33333L1.50652 11.1602C1.50652 11.1602 2.11837 11.1053 2.34637 11.3333C2.57437 11.5613 2.38669 13.0533 2.66669 13.3333C2.94669 13.6133 4.4293 13.4162 4.64196 13.6289C4.85463 13.8416 4.83988 14.4935 4.83988 14.4935L12.6668 6.66667L9.33341 3.33333ZM0.666672 13.3333L0.0377607 15.1146C0.013037 15.1849 0.000273226 15.2588 0 15.3333C0 15.5101 0.0702384 15.6797 0.195264 15.8047C0.320289 15.9298 0.489859 16 0.666672 16C0.741187 15.9997 0.815129 15.987 0.885424 15.9622C0.887598 15.9614 0.889768 15.9605 0.891934 15.9596L0.908861 15.9544L0.912768 15.9518L2.66669 15.3333L1.66668 14.3333L0.666672 13.3333Z" fill="#B0B1C8"/>
</svg>
  const disabled = cardType==='empty'?false:true;
  const paddingBottom = cardType==='empty'?'mb-[18px]':'mb-[7px]';
  const updateNote =  (e:React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.name;
    setNotes({...note, [name]: e.target.value})
  }

    const {setEditOpen, setEditingNote, editingNote} = useContext(ListContext);

  const onClick = cardType==='empty'? () =>{
    addNote && addNote({...note, listId: listId});
    setNotes({ todo: '', description:''})
  }: () =>{
    setEditOpen && setEditOpen(true)
    setEditingNote && setEditingNote({...noteVal, listId: listId} as Note & {listId: string});
    console.log(editingNote)
  }

  // const onAddNoteClick = () =>{
  //   addNote && addNote({...note, listId: listId});
  //   setNotes({ todo: '', description:''})
  // }

  return (

    <div className={`bg-cardGray animate-slideFromTop z-0 transition-all duration-500 rounded-[16px] h-[116px] p-3 mx-2 w-[286.65px] ${paddingBottom}`}>
      <div className="flex">
<span className="p-2 w-8 h-8 mr-2 -translate-y-1 bg-purple-300 rounded-full flex items-center justify-center"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9036 3.96558H2.67395C1.86398 4.89136 0.412354 6.76817 0.412354 8.342C0.412354 9.05266 0.728129 11.3718 4.78878 11.3718C8.84943 11.3718 9.1652 9.05266 9.1652 8.342C9.1652 6.76817 7.71357 4.89136 6.9036 3.96558Z" fill="white"/>
<path d="M4.4525 3.29478V1.94818H5.1258V3.29478H6.68044L8.02703 0.601593H1.55127L2.89786 3.29478H4.4525Z" fill="white"/>
</svg>
</span>
        <input disabled={disabled} name="todo" onChange={updateNote} value={note.todo} className="bg-cardGray w-full text-[18px] placeholder:text-textGray pb-[13px] font-bold" placeholder="Add Todo" type="text" />
<button disabled={!note.todo} onClick={onClick} className="disabled:cursor-default h-[25px] w-[30px] transition-all hover:scale-125 disabled:hover:scale-110 disabled:bg-textGray cursor-pointer scale-110 bg-btnGray rounded-full flex items-center justify-center">{Icon}</button>
      </div>
      <textarea disabled={disabled} name="description" onChange={updateNote} value={note.description} className="bg-cardGray font-medium w-full text-[16px] placeholder:text-textGrayLight" placeholder={cardType!=='empty'?"No Description":"Add Todo Description"} id="" cols={30} rows={2}></textarea>
    </div>
  );
};


export default Card;
