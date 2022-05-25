export function DropDownMenu(props){
    const {children} = props;
    return(
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                {children}
            </li>
        </ul>
    );
}