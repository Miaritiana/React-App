export function TableCell(props){
    const {elements} = props;
    return(
        elements.map((element,index) => <td key={'element-${index}'}>{element}</td>)
    );
}