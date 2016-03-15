import React from 'react';

export default class extends React.Component {
    static propTypes = {
        addTodo: React.PropTypes.func.isRequired
    };

    handleSubmit(e) {
        e.preventDefault();
        let text = this.refs.text.value;
        if (text){
            this.props.addTodo(this.refs.text.value);
            this.refs.text.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="text" ref="text"/>
                    <button type="submit">SAVE</button>
                </form>
            </div>
        )
    }
}