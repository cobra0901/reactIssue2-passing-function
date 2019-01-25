class TableHeader extends Component {
  handleClick = () => {
    this.props.onHeaderClick(this.props.value);
  }

  render() {
    return (
      <th onClick={this.handleClick}>
        {this.props.column}
      </th>
    );
  }
}

{this.props.defaultColumns.map((column) => (
  <TableHeader
    value={column}
    onHeaderClick={this.handleSort}
  />
))}
