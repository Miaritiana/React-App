export function InputSearch(props){
    const {children} = props;
    return(
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
               {children};
            </div>
        </form>
    );
}