import Header from "../components/Header"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Analytics = () => {
  const budget = useSelector(state => state.budget.budget)
  
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [account, setAccount] = useState('')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(isOpen && event.target.classList.contains('modal-content')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = budget.length ? budget[(budget.length) - 1].id + 1 : 1

    setBudget(prev => {
      return [...prev, {id: id, budget:amount,category:category,account:account,date: "25 december"}]
    })
    setIsOpen(prev => !prev)
  }


  return (
    <div className="grow flex flex-col pr-6">
        <Header title="Analytics" subtitle="Analyse your budget" />
        <div className="w-full grow mt-4 bg-white rounded-xl py-4 px-6 relative">
            <h1 className="font-semibold text-2xl border-b pb-2">All Budget</h1>
            <div className="w-full mt-8">  
              <ul>
              { budget?.length 
                ? budget.map(budget => 
                  <li className="border-b p-4 relative mb-8 hover:bg-slate-50 cursor-pointer" key={budget.id}>
                      <h1 className="font-semibold text-2xl mb-2 capitalize">{budget.category}</h1>
                      <Link className="flex items-center justify-between" to="/budget/1/expense">
                        <div className="flex flex-col gap-2 items-center">
                          <div className="w-16 h-16 rounded-full bg-green-500"></div>
                          <span>{budget.date}</span>
                        </div>
                        <div className="h-3 w-[70%] bg-zinc-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2">
                          <span className="block w-1/2 bg-sky-500"></span>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                          <h1 className="font-semibold text-lg">Budget: ${budget.budget}</h1>
                          <div className="flex gap-2">
                            <span className="border bg-lime-600 text-white rounded p-1"><DeleteIcon/></span>
                            <span className="border bg-red-600 text-white rounded p-1"><EditIcon/></span>
                          </div>
                        </div>
                      </Link>
                  </li>
                  )
                : <p>No budget to display</p>
                }
              </ul>
            </div>
            <div className="w-16 h-16 rounded-full text-white bg-sky-500 grid place-content-center fixed left-[80%] bottom-[5%] z-10" onClick={() => setIsOpen(prev => !prev)}>
              <button className="h-full w-full text-4xl border-none outline-none">+</button>
            </div>
        </div>
        {isOpen && 
          <div className="fixed left-0 top-0 z-20 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full duration-[2s] modal-content">
              <form className="w-[550px] min-h-[350px] bg-white rounded-lg flex flex-col py-4 px-6" onSubmit={handleSubmit}>
                <div className="grow flex flex-col justify-center gap-1">
                    <label htmlFor="budget" className="font-semibold">Budget</label>
                    <input 
                      type="number" 
                      value={amount}
                      id="budget" 
                      className=" h-10 border px-2"
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="1000"
                      required
                      />
                </div>
                <div className="grow flex flex-col justify-center gap-1 relative">
                    <label htmlFor="budget" className="font-semibold">category</label>
                    <select 
                        htmlFor="budget" 
                        value={category}
                        className="h-10 border px-2 rounded-lg appearance-none"
                        onChange={(e) => setCategory(e.target.value)}
                        selected
                        required>
                        <option value="" disabled hidden>hobbies</option>
                        <option>Food/Drinks</option>
                        <option>Vacation</option>
                        <option>Transport</option>
                        <option>Hobbies</option>
                        <option>Rent Apartment</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className="grow flex flex-col justify-center gap-1">
                    <label htmlFor="budget" className="font-semibold">Account</label>
                    <select 
                        htmlFor="account" 
                        value={account}
                        className="h-10 border px-2 rounded-lg appearance-none"
                        selected
                        onChange={(e) => setAccount(e.target.value)}
                        required>
                        <option value="" disabled hidden>eg. credit</option>
                        <option>Paypal</option>
                        <option>Credit card</option>
                        <option>wallet</option>
                    </select>
                </div>
                <div className="flex justify-end mt-2">
                  <button className=" w-12 h-12 text-sm rounded-full text-white bg-sky-500">Add</button>
                </div>
              </form>
          </div>
        </div>
        }
    </div>
  )
}

export default Analytics;