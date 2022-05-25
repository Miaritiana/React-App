export function Footer(props){
    const {children} = props;
    return(
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    {children}
                </div>
            </div>
        </footer>
    );
}