import React, {Component} from 'react';
import {connect} from 'react-redux'
import MessageCard from "../components/MessageCard/MessageCard";
import {getMessages} from "../store/actions/messagesActions";
class Main extends Component {
  componentDidMount() {
      this.props.getMessages()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.messages !== prevState){
        this.props.getMessages()
    }
    else if (this.props.match.params.id){
        console.log('pizda')
    }

  }

    render() {
        return (
            <div>

                {this.props.messages && Object.keys(this.props.messages).map(res => {

                  return(
                      <MessageCard
                          author={this.props.messages[res].author}
                          message={this.props.messages[res].message}
                          datetime={this.props.messages[res].datetime}
                          key={res}
                      />
                  )
                })}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    messages: state.messages
});
const mapDispatchToProps = dispatch => ({
   getMessages:() => dispatch(getMessages())
});
export default connect(mapStateToProps,mapDispatchToProps) (Main);