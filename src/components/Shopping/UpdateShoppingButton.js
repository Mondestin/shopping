import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import db from "../../firebase_config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const UpdateShoppingButton = ({ shopping, resetInputValue }) => {
  const saveItem = async (e) => {
    e.preventDefault();
    alert("update");
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
      Update shopping
    </Button>
  );
};

export default UpdateShoppingButton;
