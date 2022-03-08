import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    <Link to="/">
                        <Button variant="contained">Home</Button>
                    </Link>
                    <Link to="/create-shopping-list">
                        <Button variant="contained">New shopping List</Button>
                    </Link>
                    <Link to="/create-item">
                        <Button variant="contained">New Item</Button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;