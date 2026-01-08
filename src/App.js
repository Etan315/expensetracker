import "./App.css";
import './css/SpendingContainer.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  // const expenseData = {
  //   labels: ["Housing", "Food", "Entertainment"],
  //   datasets: [
  //     {
  //       data: [1200, 400, 150],
  //       backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
  //     },
  //   ],
  // };

  // // Sample Data for Income
  // const incomeData = {
  //   labels: ["Salary", "Freelance"],
  //   datasets: [
  //     {
  //       data: [3000, 500],
  //       backgroundColor: ["#4bc0c0", "#9966ff"],
  //     },
  //   ],
  // };

const data = {
  datasets: [
    {
      data: [41, 59], // 41% spent, 59% remaining
      backgroundColor: ['#2563eb', 'rgba(255, 255, 255, 0.1)'], // Blue and faint gray
      borderWidth: 0,
      circumference: 360,
      rotation: 0,
      borderRadius: 10, // Gives the rounded ends from your image
      cutout: '90%',    // Makes the ring thin
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  maintainAspectRatio: false,
};


  return (
    <div className="App">
      <main>

        <div className="spending-container">
          <div className="progress-circle">
            <Doughnut className="doughnutBar" data={data} options={options} />
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

        {/*
        <div className="input-section">
          <div className="tab-buttons">
            <button>expense</button>
            <button>income</button>
            <button>adjustment</button>
          </div>
  
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
  
        <div className="transaction-log">
          <h2>Transaction Logs</h2>
          <input type="text" className="search" placeholder="Search log..." />
          <table>
            <caption>Transaction Logs</caption>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-01-02</td>
                <td>Amazon Web Services</td>
                <td>Software</td>
                <td align="right">142.50</td>
              </tr>
              <tr>
                <td>2026-01-04</td>
                <td>Local Coffee House</td>
                <td>Meals & Ent.</td>
                <td align="right">12.75</td>
              </tr>
              <tr>
                <td>2026-01-05</td>
                <td>Apple Store - MacBook Pro</td>
                <td>Hardware</td>
                <td align="right">2499.00</td>
              </tr>
              <tr>
                <td>2026-01-06</td>
                <td>Monthly Office Rent</td>
                <td>Rent/Lease</td>
                <td align="right">1200.00</td>
              </tr>
              <tr>
                <td>2026-01-07</td>
                <td>Fiber Internet Subscription</td>
                <td>Utilities</td>
                <td align="right">89.99</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </main>
    </div>
  );
}

export default App;
