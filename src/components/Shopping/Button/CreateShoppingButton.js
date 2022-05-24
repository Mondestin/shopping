import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { addDoc, collection, Timestamp } from "firebase/firestore";

const CreateShoppingButton = ({ name, description, saveItem, resetInputValue }) => {
  

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
