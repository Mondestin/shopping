import { Button } from "@mui/material";
import db from "../../../firebase_config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UpdateShoppingButton = ({ shopping }) => {
  const navigate = useNavigate();
  const updateShopping = async (e) => {
    e.preventDefault();
    const shoppingRef = doc(db, "shoppings", shopping.id);
    await updateDoc(shoppingRef, {
      name: shopping.name,
      description: shopping.description
    })
    // Redirecting to the create shopping form 
    navigate('/shoppings/new')
  };

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
