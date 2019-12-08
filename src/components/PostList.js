import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUser } from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  shuffle(a) {
    // fisher yates
    const out = [...a];
    out.forEach((v, i) => {
      const j = Math.round(Math.random() * i);
      const v2 = a[j];
      a[j] = a[i];
      a[i] = v2;
    });
    return a;
  }

  renderList() {
    return this.shuffle(this.props.posts).map(post => {
      return (
        <div key={post.id} className="item" >
          <i className="large middle aligned icon user" />
          <div className="content description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }

}

const mapStateToProps = state => {
  return { posts: state.posts, users: state.users };
};

export default connect(
    mapStateToProps,
   { fetchPosts, fetchUser }
)(PostList);
