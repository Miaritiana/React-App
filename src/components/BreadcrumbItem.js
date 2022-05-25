export function BreadcrumbItem(props){
    const {children} = props;
    return(
        <li className="breadcrumb-item">
            {children}
        </li>
    );
}