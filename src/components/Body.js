export function Body(props){
    const {children} = props;
    return(
        <body className="sb-nav-fixed">
            {children}
        </body>
    );
}
