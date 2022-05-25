export function ColapdedLink(props){
    const {text} = props;
    return(
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" aria-expanded="false">
            {text}
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
    );
}