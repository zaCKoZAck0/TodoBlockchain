import { useEffect, useState } from 'react'
import NotificationBar from './components/NotificationBar'
import Navbar from './components/Navbar'
import { ethers } from 'ethers'
import ListsContainer from './components/ListsContainer'
import { ListContext } from './listContext'
import { List, Note } from './interfaces'
import TodoList from '../contract/artifacts/contracts/TodoList.sol/TodoLists.json'
import {CONTRACT_ADDRESS} from './config'

function App() {

  const [lists, setLists]  = useState<List[]>([])
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [editingNote, setEditingNote] = useState<Note & {listId: string} | null>(null)
  const [currentAccount, setCurrentAccount] = useState('')
  const [refresh, setRefresh] = useState(true)


  async function main() {
     const {ethereum} = window as any;
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS,TodoList.abi, signer)
    await connectWallet();
    const data = await contract.getTodos(currentAccount);

    const newLists = Promise.all(data.map(async (curr) => {
      const list = {
        name:  curr.id,
        id: curr.id,
        notes: curr.todos?curr.todos.map(t =>{
          const todo = {
            id: t.id,
            todo: t.title,
            description: t.description,
            isDone: t.isDone,
          }
          return todo
        }):[]
      }
      return list;
    }))
    
    setLists(await newLists);
  }

  useEffect(() => {
    main()
  }, [currentAccount, lists, refresh])
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      alert('Please accept request, Error connecting to metamask :'+ error)
    }
  }  


  return (
    <ListContext.Provider value={{refresh, setRefresh ,currentAccount, setCurrentAccount, editOpen, setEditOpen, lists, setLists, editingNote, setEditingNote}}>
    <div className='bg-black h-full font-inter tracking-widest'>
      <NotificationBar
      children ={<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, facilis.</span>} />
      <Navbar />
      <ListsContainer />
    </div>
    </ListContext.Provider>
  )
}

export default App
