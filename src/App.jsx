import { useLoaderData } from "react-router-dom"
import CoffeCard from "./components/CoffeCard";
import { useState } from "react";
import Header from "./components/Header";



function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
      <div className=" px-2 mx-auto">
      <Header></Header>
        <main className="mt-7">
          <div className="grid md:grid-cols-2 gap-4 ">

            {
              coffees.map(coffee => <CoffeCard key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeCard>)
            }
          </div>
        </main>
      </div>
    </>
  )
}

export default App
