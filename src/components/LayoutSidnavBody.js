export function LayoutSidenavBody(props){
    const {children} = props;
    return(
        <div id="layoutSidenav_content">
            {children}
        </div>
    );
}