import React, {Component} from 'react';
import {connect} from "react-redux";
import './Remote.css';
import {postMessage} from "../../store/actions/messagesActions";

class Remote extends Component {
    state = {
        author: '',
        message: ''
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };
    sendMessage = event => {
        event.preventDefault();
        const message = {author: this.state.author, message: this.state.message,};
        this.props.postMessage(message);
        this.setState({author: '', message: ''});
    };
    render() {
        return (
            <div>
                <form onSubmit={this.sendMessage} className="Remote">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Author</label>
                        <input type="text"
                               className="form-control"
                               name="author"
                               value={this.state.author}
                               onChange={this.onChange}
                               autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Message</label>
                        <input type="text"
                               className="form-control"
                               name="message"
                               value={this.state.message}
                               onChange={this.onChange}
                               autoComplete="off"
                        />
                        <button type="submit" className="btn btn-success">Send</button>
                        <p style={{color: "red"}}>{this.props.error.status} {this.props.error.error}</p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    postMessage: message => dispatch(postMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Remote);