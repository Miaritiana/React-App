export function ContainerFluid(props){
    const {children} = props;
    return(
        <div className="container-fluid px-4">
            {children}
        </div>
    );
}