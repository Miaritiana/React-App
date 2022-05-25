export function Input(props){
    const {type,placeholder} = props;
    return(
        <input className="form-control" type={type} placeholder={placeholder} aria-label={placeholder}/>
    );
}