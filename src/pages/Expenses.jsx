import Header from "../components/Header";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useSelector, useDispatch } from "react-redux";
import { addToExpenses } from "../redux/budgetReducer";
import { updateExpenseValue } from "../redux/piechartdata";

const Expenses = () => {
  const {id:budgetId} = useParams()
  const expenses = useSelector(state => state.budget.expenses)
  const filteredExpenses = [...expenses].filter(expense => expense.budgetId == budgetId)
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [account, setAccount] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()


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
    const id = filteredExpenses.length ? filteredExpenses[(filteredExpenses.length) - 1].id + 1 : 1
    dispatch(addToExpenses({
      id:id,
      budgetId:budgetId,
      expense:amount,
      category:category,
      account:account,
      date: "25 december",
      description:description
    }))
    dispatch(updateExpenseValue({
      category, amount
    }))
    setIsOpen(prev => !prev)


    setAmount('')
    setAccount('')
    setCategory('')
    setDescription('')
  }

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <div className="grow flex flex-col pr-6">
        <Header title="Expenses" subtitle="Analyse your Expense"/>
        <div className="grow mt-4 bg-white rounded-xl py-4 px-6 relative">
          <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-4xl">Food/Drinks</h1>
              <p>20 Decemeber</p>
          </div>
          <div className="mt-8 flex justify-between items-center border-b pb-3">
              <h1 className="text-2xl">Transaction: 0</h1>
              <h1 className="text-2xl font-semibold text-green-500">Budget: $2000</h1>
              <h1 className="text-2xl font-semibold text-red-500">Expenses: $1500</h1>
          </div>
          <div className="mt-4">
            <ul>
              { filteredExpenses.length 
              ? filteredExpenses?.reverse().map(expense => 
                <li className="hover:-translate-y-2 hover:scale-[1.02] duration-150 rounded p-2 mb-3 relative" key={expense.id}>
                   <Accordion>
                    <AccordionSummary>
                      <div className="flex items-center justify-between w-full h-full">
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-16 rounded-full bg-sky-500 text-white"></div>
                            <div className="flex flex-col gap-1">
                              <h1>{expense.category}</h1>
                              <h1>{expense.account}</h1>
                            </div>
                          </div>
                          <div className="flex gap-2">
                              <div className="flex flex-col gap-1">
                                <span>${expense.expense}</span>
                                <span>{expense.date}</span>
                              </div>
                              <div onClick={() => handleDelete()} className="relative">
                                <MoreHorizIcon/>
                              </div>
                          </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>{expense.description}</p>
                    </AccordionDetails>
                   </Accordion>
                </li>)
              : <p>No expenses to display</p>
              }
            </ul>
          </div>
        </div>
        <div className="w-16 h-16 rounded-full text-white bg-sky-500 grid place-content-center fixed left-[80%] bottom-[5%] z-10" onClick={() => setIsOpen(prev => !prev)}>
          <button className="h-full w-full text-4xl border-none outline-none">+</button>
        </div>
        {isOpen && 
          <div className="fixed left-0 top-0 z-20 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full duration-[2s] modal-content">
              <form className="w-[550px] min-h-[420px] bg-white rounded-lg flex flex-col py-4 px-6" onSubmit={handleSubmit}>
                <div className="grow flex flex-col justify-center gap-1">
                    <label htmlFor="expense" className="font-semibold">Expense</label>
                    <input
                      type="number" 
                      value={amount}
                      id="expense" 
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
                <div className="grow flex flex-col justify-center gap-1">
                    <label htmlFor="description" className="font-semibold">Description</label>
                    <input 
                      type="text" 
                      value={description}
                      id="expense" 
                      className=" h-10 border px-2"
                      onChange={(e) => setDescription(e.target.value)}
                      />
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

export default Expenses;