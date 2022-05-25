export function HeaderLink(props){
    const {logo} = props;
    return(
        <a className="navbar-brand ps-3" href="index.html">{logo}</a>
    );
}