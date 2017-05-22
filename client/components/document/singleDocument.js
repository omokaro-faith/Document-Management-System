import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSingleDocument } from '../../actions/documentActions';


/**
 *
 *
 * @class singleDocument
 * @extends {React.Component}
 */
class singleDocument extends React.Component {

  /**
   *
   *
   *
   * @memberOf singleDocument
   */
  componentDidMount() {
    const id = this.props.params.id;
    this.props.getSingleDocument(id);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf singleDocument
   */
  render() {
    const doc = this.props.doc;
    return (
      <div className="container">
        <div className="z-depth-5 card docCard1">
          <div className="card-content cardContent">
            <span className="card-title cardTitle">{doc.title}</span>
            <p>{doc.content}</p>
            <a href="/loaddocuments">Go Back To Document Page</a>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getSingleDocument: bindActionCreators(getSingleDocument, dispatch)
});

const mapStateToProps = state => ({
  doc: state.documents,
});

export default connect(mapStateToProps, mapDispatchToProps)(singleDocument);
