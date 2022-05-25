export function TableFooter(props){
    const {children} = props;
    return(
        <tfoot>
            {children}
        </tfoot>
    );
}