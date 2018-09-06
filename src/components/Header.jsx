import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <Link to="/"><h1>MiniBlog</h1></Link>
            </div>
            
        )
    }
}

export default Header;