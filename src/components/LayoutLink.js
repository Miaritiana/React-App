export function LayoutLink(props){
    const {text} = props;
    return(
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                {text}
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
    );
}