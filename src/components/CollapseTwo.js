export function CollapseTwo(props){
    const {children} = props;
    return(
        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                {children}
            </nav>
        </div>

    );
}