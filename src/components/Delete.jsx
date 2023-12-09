

const Delete = ({type, func, id, func2}) => {
  return (
    <div className="fixed left-0 top-0 z-40 w-full h-full bg-[#21212190]">
        <div className="flex justify-center items-center h-full duration-[2s] modal-content">
            <div className="border rounded-lg bg-white p-4 flex flex-col gap-4">
                <p>Are you sure you want to delete this <span className="font-bold">{type}</span>?</p>
                <div className="flex gap-1 justify-evenly capitalize">
                    <button className="py-3 px-6 rounded-md text-white bg-red-500" onClick={() => func(id)}>Delete</button>
                    <button className="py-3 px-6 rounded-md text-white bg-sky-500" onClick={() => func2()}>cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete