class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is placeholder for the issue filter.");
  }
}
class IssueTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is placeholder for the issue Table.");
  }
}
class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is placeholder for adding the Issue.");
  }
}
class IssueTracker extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }
}
const element = /*#__PURE__*/React.createElement(IssueTracker, null);
ReactDOM.render(element, document.getElementById('contents'));