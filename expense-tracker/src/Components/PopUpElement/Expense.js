import React,{useState} from "react";
import { Button, TextField } from "@mui/material";
import "./expense.css";
const Expense = () => {
    const [titleInput, setTitleInput] = useState('')
    const [priceInput, setPriceInput] = useState(0)
    const [categoryInput, setCategoryInput] = useState('');
    const [dateInput,setDateInput] = useState('')
    const [expense,setExpense] = useState({
        title : "",
        price : "",
        category : "",
        date : "",
    });
    

    const handleTitleInput=()=>{
        setTitleInput((e)=>e.target.value)
    }
    const handlePriceInput=()=>{
        setPriceInput((e)=>e.target.value)
    }
    const handleCategoryInput=()=>{
        setCategoryInput((e)=>e.target.value)
    }

    const handleDateInput=()=>{
        setDateInput((e)=>e.target.value)
    }

    const handleAddExpense=()=>{
        setExpense({
            title:titleInput,
            price:priceInput,
            category:categoryInput,
            date:dateInput
        });
        setTitleInput('');
        setPriceInput('');
        setCategoryInput('');
        setDateInput('');
        
    }
    const handleCancelExpense=()=>{
        setTitleInput('');
        setPriceInput('');
        setCategoryInput('');
        setDateInput('');
    }

  return (
    <div className="e-container">
      <div className="exp-content">
        <p className="e-header">Add Expenses</p>
        <div className="content-container">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="text"
            underline
            value={titleInput}
            onChange={handleTitleInput}
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "223px",
              height: "51px",
              padding:"20pz"
            }}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="text"
            underline
            value={priceInput}
            onChange={handlePriceInput}
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "223px",
              height: "51px",
              padding:"20pz"
            }}
          />
          <TextField
            id="outlined-basic"
            label="Select Category"
            variant="text"
            underline
            value={categoryInput}
            onChange={handleCategoryInput}
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "223px",
              height: "51px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="dd/mm/yyyy"
            variant="text"
            underline
            value={dateInput}
            onChange={handleDateInput}
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "223px",
              height: "51px",
              padding:"20pz"
            }}
          />
          <Button
          onClick  ={handleAddExpense}
            sx={{
              width: "223px",
              height: "51px",
              backgroundColor: "#F4BB4A",
              borderRadius: "15px",
              color: "white",
              width: "223px",
              height: "51px",
            }}
          >
            Add Expense
          </Button>
          <Button onClick  ={handleCancelExpense}
            sx={{
              width: " 112px",
              height: "51px",
              backgroundColor: "#D9D9D9",
              borderRadius: "15px",
              color: "white",
              width: "112px",
              height: "51px",
            }}
          >
            Cancel
          </Button>
          <p>{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Expense;
