const ImportantComponent = props => <div>Hello {props.name}!</div>;

class ImportantComponent extends React.Component {
  render = () => <div>Hello {this.props.name}</div>;
}
