import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render () {
    const { user } = this.props;
    if (!user) {
      return (
            <div className="ui active inline tiny centered loader"></div>
      );
    }
    return <div className="ui header"><h2>{user.name}</h2></div>;
  }

}

const mapStateToProps = (state, ownProps) => { 
  return { user: state.users[ownProps.userId] }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
