import React,{useState} from "react";
import { Button, TextField } from "@mui/material";
import "./edit.css";

const EditExpense = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('')
    const [data,setData]=useState();

    const handleChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleChangePrice=(e)=>{
        setPrice(e.target.value)
    }
    const handleChangeCategory=(e)=>{
        setCategory(e.target.value)
    }

    const handleChangeData=(e)=>{
        setData(e.target.value)
    }

  return (
    <div className="ee-container">
      <div className="ee-text-content">
        <p className="ee-text">Edit Expenses</p>
        <div className="ee-content">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={handleChangeTitle}
            sx={{ backgroundColor: "#ffff", borderRadius: "15px" }}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e)=>e.target.value}
            sx={{ backgroundColor: "#ffff", borderRadius: "15px" }}
          />
          <TextField
            id="outlined-basic"
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e)=>e.target.value}
            sx={{ backgroundColor: "#ffff", borderRadius: "15px" }}
          />
          <TextField
            id="outlined-basic"
            label="dd/mm/yyyy"
            variant="outlined"
            value={data}
            onChange={(e)=>e.target.value}
            sx={{ backgroundColor: "#ffff", borderRadius: "15px" }}
          />
          <Button
            variant="text"
            sx={{
              width: "223px",
              height: "51px",
              borderRadius: "15px",
              backgroundColor: "#F4BB4A",
              fontFamily: "Open Sans",
              fontWeight: "700",
              fontSize: "16px",
              color: "#ffff",
            }}
          >
            Add Expense
          </Button>
          <Button
            variant="text"
            sx={{
              width: "112px",
              height: "51px",
              borderRadius: "15px",
              backgroundColor: "#D9D9D9",
              color: "#000000",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;
