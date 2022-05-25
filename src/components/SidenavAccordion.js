export function SidenavAccordion(props){
    const {children} = props;
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            {children}
        </nav>
    );
}