import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div>
                    <ul>
                        <li><Link to='/'>Äänestä</Link></li>
                        <li><Link to='/results/1'>Tulokset</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;