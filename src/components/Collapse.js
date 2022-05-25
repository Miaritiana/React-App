export function Collapse(props){
    const {id,children,ariaLabelledby} = props;
    return(
        <div className="collapse" id={id} aria-labelledby={ariaLabelledby} data-bs-parent="#sidenavAccordion">
            <nav className="sb-sidenav-menu-nested nav">
                {children}
            </nav>
        </div>
    );
}