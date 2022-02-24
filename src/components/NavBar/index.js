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
                    <Link to="/create">
                        <Button variant="contained">New shooping List</Button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;