import React,{useState} from "react";
import { Button, TextField } from "@mui/material";
import "./income.css";

const Income = () => {
    const [balanceInput, setBalanceInput] = useState(5000);
    const handleInputBalance = () =>{
        setBalanceInput((e)=>e.target.value)
    }

    const handleCancelBalance = () =>{
        setBalanceInput('');
    }

  return (
    <div className="i-container">
      <div className="income-container">
        Add Balance
        <div className="content-i-container">
          <TextField
            id="outlined-basic"
            label="Income Amount"
            value={balanceInput}
            onChange={handleInputBalance}
            sx={{
              width: "217px",
              height: "51px",
              border: "none",
              borderRadius: "15px",
            }}
          />
          <Button
            variant="submit"
            sx={{
              width: "145px",
              height: "51px",
              borderRadius: "15px",
              color: "#ffff",
              backgroundColor: "#F4BB4A",
            }}
          >
            Add Balance
          </Button>
          <Button
            variant="text"
            onClick={handleCancelBalance}
            sx={{
              width: "112px",
              height: "51px",
              borderRadius: "15px",
              color: "#00000040",
              backgroundColor: "#D9D9D9",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Income;
