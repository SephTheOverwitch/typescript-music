import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

interface IProps {
    pageWrapId: string;
    outerContainerId: string;
}

class Sidebar extends React.Component<IProps> {
    render() {
        return (
            <Menu {...this.props}>
                <Link to="/" className="menu-item"> Home </Link>
                <Link to="/clock" className="menu-item"> Clock </Link>
                <Link to="/musiclist" className="menu-item"> Music List </Link>
            </Menu>
        );
    };
};

export default Sidebar;