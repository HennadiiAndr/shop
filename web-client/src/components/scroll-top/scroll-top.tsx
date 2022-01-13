import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";

type ScrollTopProps = RouteComponentProps;

class ScrollTop extends Component<ScrollTopProps> {
  componentDidUpdate(prevProps: ScrollTopProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollTop);
