import React from 'react';

export default class extends React.Component {

    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired,
        todo: React.PropTypes.object.isRequired
    };

    render() {
        let style = {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
        return (
            <div>
                <span onClick={this.props.onRemove}>X</span>:
                <span style={style} onClick={this.props.onClick}>
                    <strong>{this.props.todo.id}</strong>:<span>{this.props.todo.text}</span>:
                </span>
            </div>
        );
    }
}