import React, { useState } from "react";
import Expense from "./expense-tracker/components/Expense";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/Categories";

const App = () => {
  const [selectedCategory, setselectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 10, category: "Utilities" },
    { id: 2, description: "Chips", amount: 10, category: "Groceries" },
    { id: 3, description: "Soda", amount: 10, category: "Groceries" },
    { id: 4, description: "Candy", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(new_expense) =>
            setExpenses([
              ...expenses,
              { ...new_expense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setselectedCategory(category)}
        />
      </div>
      <Expense
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
