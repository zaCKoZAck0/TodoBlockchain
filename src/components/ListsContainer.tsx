import { List, AddList } from "./List";
import { ListContext } from "../listContext";
import { useContext } from "react";


const ListsContainer = () => {
    const {lists} = useContext(ListContext);
  return (<>
    <div className="flex text-white w-full justify-center overflow-x-scroll scrollbar -z-10">
      {
        lists.map((list)=>
          <List key={list.id} list={list}/>
        )
      }
      <AddList />
    </div>
    </>
  );
};

export default ListsContainer;
