import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import db from "../../../firebase_config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
      startIcon={<AddShoppingCartIcon />}
      fullWidth
      onClick={updateShopping}
    >
      Edit
    </Button>
  );
};

export default UpdateShoppingButton;
