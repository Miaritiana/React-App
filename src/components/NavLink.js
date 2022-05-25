export function NavLink(props){
    const {file,link,children} = props;
    return(
        <a className="nav-link" href={file}>
            {children}
            {link}
        </a>
    );
}