import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const expenseData = {
    labels: ["Housing", "Food", "Entertainment"],
    datasets: [
      {
        data: [1200, 400, 150],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  // Sample Data for Income
  const incomeData = {
    labels: ["Salary", "Freelance"],
    datasets: [
      {
        data: [3000, 500],
        backgroundColor: ["#4bc0c0", "#9966ff"],
      },
    ],
  };

  return (
    <div className="App">
      <div className="spending-container">
        <div className="progress-circle">
          {/* <svg>...</svg> */}

          <div className="circle-content">
            <p className="title">AVAILABLE</p>
            <span className="numbers">$1,766</span>
            <p className="percentage">41% Spent</p>
          </div>
        </div>

        <div className="spending-details">
          <div className="stat-item">
            <p>Budget</p>
            <span>$3,000</span>
          </div>
          <div className="stat-item">
            <p>Expenses</p>
            <span>-$1,234</span>
          </div>
        </div>
      </div>

      <div className="input-section">
        <div className="tab-buttons">
          <button>expense</button>
          <button>income</button>
          <button>adjustment</button>
        </div>

        {/* TAB FOR EXPENSES */}
        <div className="tab expense">
          <form action="#submit_expenses">
            <label htmlFor="discription"></label>
            <input
              type="text"
              id="discription"
              name="discription"
              className="discription"
            />

            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" />

            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="housing">Housing</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="healthcare">Healthcare</option>
              <option value="shopping">Shopping</option>
              <option value="others">Others</option>
            </select>
            <button type="submit">Add</button>
          </form>
        </div>

        {/* TAB FOR INCOME */}
        <div className="tab income">
          <form>
            <input type="text" placeholder="Source (e.g. Monthly Salary)" />
            <input type="number" placeholder="Amount ($)" />
            <select>
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="gift">Gift</option>
            </select>
            <button type="submit" className="btn-income">
              Add Income
            </button>
          </form>
        </div>

        {/* TAB FOR ADJUSTMENT */}
        <div className="tab adjustment">
          <p>Use this to manually sync your current bank balance.</p>
          <form>
            <label>New Total Balance</label>
            <input
              type="number"
              placeholder="Enter actual amount (e.g. 5000)"
            />
            <button type="submit" className="btn-adjust">
              Update Balance
            </button>
          </form>
        </div>
      </div>

      <div
        className="visual-analytics"
        style={{ display: "flex", gap: "20px" }}
      >
        <div className="chart expenses">
          <h3>Expenses</h3>
          <Pie data={expenseData} />
        </div>
        <div className="chart income">
          <h3>Income</h3>
          <Pie data={incomeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
