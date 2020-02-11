import React, {Component} from 'react';
import {connect} from 'react-redux'
import MessageCard from "../components/MessageCard/MessageCard";
import { getMessagesByDatetime} from "../store/actions/messagesActions";

class GetMessageById extends Component {
    componentDidMount() {
        this.props.getMessagesById(this.props.match.params.id)
    }

    render() {
        return (
            <div>

                {this.props.messages && Object.keys(this.props.messages).map(res => {

                    return(
                        <div>
                            <MessageCard
                                author={this.props.messages[res].author}
                                message={this.props.messages[res].message}
                                datetime={this.props.messages[res].datetime}
                                key={res}
                            />

                        </div>

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
    getMessagesById:date => dispatch(getMessagesByDatetime(date))
});
export default connect(mapStateToProps,mapDispatchToProps) (GetMessageById);