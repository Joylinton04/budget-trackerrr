import Header from "../components/Header";
import Statbox from "../components/Statbox";
import PieChart from "../components/PieChart";
import { useSelector } from "react-redux";

const Home = () => {
  const budget = useSelector(state => state.budget.budget)
  const expenses = useSelector(state => state.budget.expenses)
  const data = useSelector(state => state.PieChartData.DataExpense)
  const data2 = useSelector(state => state.PieChartData.DataBudget)
  const noBudgetChart = [...data2].every(data => data.value === 0)
  const noExpenseChart = [...data].every(data => data.value === 0)
  const amount = [...budget].reduce((total, currentAmount) => total + parseFloat(currentAmount.budget), 0)
  const totalExpense = [...expenses].reduce((total, currentAmount) => total + parseFloat(currentAmount.expense), 0)

  return (
    <div className="min-h-screen grow pr-6 flex flex-col">
        <Header title="Dashboard" subtitle="Overview of your Budget and expenses" dashboard/>
        <div className="my-6 flex flex-col gap-5">
          <div className="flex gap-6 grow flex-wrap">
            <Statbox amount={amount} type="Budget" />
            <Statbox amount={totalExpense} type="Expense" />
            <Statbox amount={amount - totalExpense} type="Remaining" />
          </div>
          <div className="bg-white py-4 px-6 rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Recent Records</h1>
                <span className="text-base underline cursor-pointer">View All</span>
              </div>
              <div className="mt-6 mb-8 w-full max-h-[200px] overflow-auto">
                <table className="w-full">
                  <tbody className="w-full">
                    {budget?.length 
                    ? budget.map(budget => 
                      <tr className="border-b-2 relative hover:bg-slate-50 cursor-pointer w-full" key={budget.id}>
                        <td className="py-5 px-4">{budget.category}</td>
                        <td className="py-5 px-4">{budget.date}</td>
                        <td className="py-5 px-4">{budget.account}</td>
                        <td className="py-5 px-4 text-red-500 font-bold absolute right-0">${budget.budget}</td>
                      </tr>
                      )
                    : <tr><td>No recent budget</td></tr>
                    }
                  </tbody>
                </table>
              </div>
          </div>
          <div className="h-96 rounded-xl w-full flex gap-6 lgg:flex-wrap">
            <div className="h-full w-1/2 lgg:w-full bg-white rounded-xl pb-8">
              {noBudgetChart
              ? <p className="text-center py-6 font-semibold text-lg text-sky-500">Add budget to display chart here</p>
              : <>
                  <p className="font-bold text-2xl px-6 mt-3">Budget Chart</p>
                  <PieChart data={data2}/>
                </>
              }
            </div>
            <div className="h-full w-1/2 lgg:w-full bg-white rounded-xl pb-8">
              {noExpenseChart
              ? <p className="text-center py-6 font-semibold text-lg text-sky-500">Add Expense to display chart here</p>
              : <>
                  <p className="font-bold text-2xl px-6 mt-3">Expense Chart</p>
                  <PieChart data={data}/>
                </>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;