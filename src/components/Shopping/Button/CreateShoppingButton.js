import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import db from "../../../firebase_config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const CreateShoppingButton = ({ name, description, resetInputValue }) => {
  const saveItem = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "shoppings"), {
      name: name,
      description: description,
      date: Timestamp.fromDate(new Date()),
    });
    
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<AddShoppingCartIcon />}
      fullWidth
      onClick={saveItem}
    >
      Add
    </Button>
  );
};

export default CreateShoppingButton;
