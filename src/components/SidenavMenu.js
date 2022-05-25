export function SidenavMenu(props){
    const {children} = props;
    return(
        <div className="sb-sidenav-menu">
            {children}
        </div>
    );
}