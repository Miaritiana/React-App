export function DropdownBlock(props){
    const {children} = props;
    return(
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            {children}
        </ul>
    );
}