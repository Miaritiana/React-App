export function TableHeadCell(props){
    const {elements} = props;
    return(
        elements.map((element,index) => <th key={'element-${index}'}>{element}</th>)
    );
}