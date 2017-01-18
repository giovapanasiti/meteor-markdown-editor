import React, {Component} from 'react';

class BinsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;

    Meteor.call('bins.share', this.props.bin, email);

  }

  renderShareList() {
    return this.props.bin.sharedWith.map(email => {
    return (
      <button 
      className="btn btn-default" key={email} disabled>
        {email}
      </button>)
    })
  }

  render() {
    return(
      <div>
        
        <button type="button" className="btn btn-primary btn-sm button-share" data-toggle="modal" data-target="#myModal">
          Share this
        </button>

        
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Share this Content</h4>
              </div>
              <div className="modal-body">
                Type here the email of the people you want to share your content with:
                <hr/>
                
                <div className="col-sm-6">
                  <div className="input-group">
                  <input  className="form-control" ref="email"/>
                  <div className="input-group-btn">
                    <button 
                    onClick={this.onShareClick.bind(this)} 
                    className="btn btn-default">
                      Share this bin
                    </button>
                  </div>
                  </div>
                </div>
                
                <div className="col-sm-6">
                    <div>
                      Shared with:
                    </div>
                    <div className="btn-group">
                      {this.renderShareList()}
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      
      
      </div>
 
    )
  }
}

export default BinsShare;