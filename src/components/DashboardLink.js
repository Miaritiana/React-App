export function DashboardLink(props){
    const {text} = props;
    return(
        <a className="nav-link" href="index.html">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                {text}
        </a>
    );
}