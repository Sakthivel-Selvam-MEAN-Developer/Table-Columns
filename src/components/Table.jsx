const Table = ({ columns }) => {
    var cols = []
    for (let i = 1; i <= columns; i++) {
        cols.push(<td>Column {i}</td>)
    }

    return (
        <div className="table container">
            <div className="title mt-4">
                <h3>Table</h3>
            </div>
            {columns != 0 ? (
                <table className="table table-primary mt-4">
                    <thead>
                        {cols}
                    </thead>
                </table>
            ) : (
                <p>No Columns</p>
            )}
        </div>
    )
}

export { Table }