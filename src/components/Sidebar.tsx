import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";


class Sidebar extends React.Component<{}, {}> {
    render() {
        return (
            <Menu {...this.props}>
                <Link to="/" className="menu-item"> Home </Link>
                <Link to="/clock" className="menu-item"> Clock </Link>
            </Menu>
        );
    };
};

export default Sidebar;