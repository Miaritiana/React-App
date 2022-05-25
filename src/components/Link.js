export function Link(props){
    const {file,link,target} = props;
    return(
        <a target={target} href={file}>{link}</a>
    );
}