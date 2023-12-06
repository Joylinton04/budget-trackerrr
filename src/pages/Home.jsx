import Header from "../components/Header";
import Statbox from "../components/Statbox";
import PieChart from "../components/PieChart";
import { useSelector } from "react-redux";

const Home = () => {
  const budget = useSelector(state => state.budget.budget)

  return (
    <div className="min-h-screen grow pr-6 flex flex-col">
        <Header title="Dashboard" subtitle="Overview of your Budget and expenses" dashboard/>
        <div className="my-6 flex flex-col gap-5">
          <div className="flex gap-6 grow">
            <Statbox amount="$40,000" type="Budget" />
            <Statbox amount="$40,000" type="Budget" />
            <Statbox amount="$40,000" type="Budget" />
          </div>
          <div className="bg-white py-4 px-6 rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Recent Records</h1>
                <span className="text-base underline cursor-pointer">View All</span>
              </div>
              <div className="mt-6 mb-8 w-full max-h-[250px] overflow-auto">
                <table className="w-full">
                  <tbody>
                    {budget?.length 
                    ? budget.map(budget => 
                      <tr className="border-b-2 relative hover:bg-slate-50 cursor-pointer flex justify-between" key={budget.id}>
                        <td className="py-4 px-2">{budget.category}</td>
                        <td className="py-4 px-2">{budget.date}</td>
                        <td className="py-4 px-2">{budget.account}</td>
                        <td className="py-4 px-2 text-red-500 font-bold">${budget.budget}</td>
                      </tr>
                      )
                    : <p>No recent budget</p>
                    }
                  </tbody>
                </table>
              </div>
          </div>
          <div className="h-80 rounded-xl w-full flex gap-6">
            <div className="h-full grow bg-white">
              <PieChart/>
            </div>
            <div className="h-full grow bg-white">
              <PieChart/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;