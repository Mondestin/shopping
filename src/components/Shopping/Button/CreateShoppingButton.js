import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import db from "../../../firebase_config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const CreateShoppingButton = ({ shopping, resetInputValue }) => {
  const saveItem = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "shoppings"), {
      name: shopping.name,
      date: Timestamp.fromDate(shopping.date),
    });
    resetInputValue();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      startIcon={<AddShoppingCartIcon />}
      fullWidth
      onClick={saveItem}
    >
      Create shopping
    </Button>
  );
};

export default CreateShoppingButton;
