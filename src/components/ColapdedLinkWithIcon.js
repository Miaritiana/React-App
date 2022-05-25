export function ColapdedLinkWithIcon(props){
    const {text} = props;
    return(
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            {text}
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
    );
}