export function BreadcrumbItemActive(props){
    const {children} = props;
    return(
        <li className="breadcrumb-item active">
            {children}
        </li>
    );
}