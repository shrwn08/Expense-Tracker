import React,{useState} from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import PieChart from './PieChart';
import "./card.css";

const Card = () => {
    const [balance, setBalance] = useState(5000);
//   const [expense, setExpense] = useState(0);
//   const [incomePath, setIncomePath] = useState(true)
  const navigate = useNavigate()

    const handleIncomeClick=()=>{
        
            navigate("../PopUpElement/Income.js")
       
    }

  return (
    <div className="c-container">
      <div className="adding-container">
        <div className="wallet-ballance">
          <p className="bal-text">
            Wallet Ballance :<span className="bal">₹
            {balance}
            </span>{" "}
          </p>
          <Button onClick={handleIncomeClick()}
            sx={{
              width: "167.65px",
              height: "38px",
              backgroundColor:'#9DFF5B',
              color:'white',
              borderRadius:"15px",
            }}
          >
            +Add Income
          </Button>
        </div>
        <div className="expense">
        <p className="exp-text">
            Expenses :<span className="exp">₹
            {/* {expense} */}
            </span>{" "}
          </p>
        <Button
            sx={{
              width: "167.65px",
              height: "38px",
              backgroundImage: 'linear-gradient(to right, #FF9595, #FF4747, #FF3838)',
              color:'white',
              borderRadius:"15px",
            }}
          >
            +Add Expense
          </Button>
        </div>
      </div>
      <div className="chart-container"></div>
    </div>
  );
};

export default Card;
