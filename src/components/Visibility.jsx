import React from 'react';

export default class extends React.Component {
    static propTypes = {
        visibility: React.PropTypes.string.isRequired,
        setVisibility: React.PropTypes.func.isRequired
    };

    render() {
        let visibilityLink = (visibility) => {
            let style = {
                textDecoration: (this.props.visibility === visibility) ? 'underline' : 'none',
                cursor: 'pointer',
                fontWeight: (this.props.visibility === visibility) ? 'bold' : 'normal'
            };
            return (
                <a style={style} onClick={this.props.setVisibility.bind(this, visibility)}>{visibility}</a>
            )
        };
        return (
            <div>
                {visibilityLink('ALL')} | {visibilityLink('COMPLETED')} | {visibilityLink('NOT_COMPLETED')}
            </div>
        )
    }
}