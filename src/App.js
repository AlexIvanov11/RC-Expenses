import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Car insurance",
      amount: 322,
      date: new Date(2021, 5, 6),
    },
    {
      id: "2",
      title: "Health insurance",
      amount: 4343,
      date: new Date(2021, 3, 6),
    },
    { id: "3", title: "Tyres", amount: 55, date: new Date(2021, 5, 17) },
    {
      id: "4",
      title: "Intel shares",
      amount: 567,
      date: new Date(2021, 5, 11),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
