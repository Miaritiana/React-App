export function Table(props){
    const {children} = props;
    return(
        <table id="datatablesSimple">
            {children}
        </table>
    );
}