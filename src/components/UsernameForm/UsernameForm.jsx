import React, {Component} from "react";
import {Form, Input, Message} from "semantic-ui-react";
import "./UsernameForm.scss";

export default class UsernameForm extends Component {
    state = {
        username: ""
    };
    onInputChange = (ev) => this.setState({username: ev.target.value});
    onFormSubmit = () => {
        const {username} = this.state;
        if (username) {
            return this.props.onSubmit(username);
        }
    };
    render() {
        const {error, loading} = this.props;
        return (
            <Form error={!!error} onSubmit={this.onFormSubmit} className="usernameForm">
                <Form.Field>
                    <label htmlFor="usernameInput">Enter a github username</label>
                    <Input disabled={loading} loading={loading} id="usernameInput"
                        autoFocus
                        icon={{name: "search", circular: true, link: true, onClick: this.onFormSubmit}}
                        placeholder="Search..."
                        onChange={this.onInputChange}
                        value={this.state.username} />
                </Form.Field>
                {error && <Message error content={error} />}
            </Form>
        );
    }
}

