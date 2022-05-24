import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UpdateShoppingButton = ({ shopping, updateShopping }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      disableElevation
      startIcon={<ShoppingCartIcon />}
      fullWidth
      onClick={updateShopping}
    >
      Update
    </Button>
  );
};

export default UpdateShoppingButton;
