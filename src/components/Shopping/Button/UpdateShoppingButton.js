import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const UpdateShoppingButton = ({ shopping, resetInputValue }) => {
  const saveItem = async (e) => {
    e.preventDefault();
    console.log(shopping);
  
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
      Edit
    </Button>
  );
};

export default UpdateShoppingButton;
