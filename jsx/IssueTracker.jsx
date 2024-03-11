class IssueFilter extends React.Component{
    render() {
        return(
            <div>This is placeholder for the issue filter.</div>
        );
    }
}

class IssueTable extends React.Component{
    render() {
        return(
            <div>This is placeholder for the issue Table.</div>
        );
    }
}

class IssueAdd extends React.Component{
    render() {
        return(
            <div>This is placeholder for adding the Issue.</div>
        );
    }
}

class IssueTracker extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        );
    }
}

const element = <IssueTracker />;

ReactDOM.render(element,document.getElementById('contents'));