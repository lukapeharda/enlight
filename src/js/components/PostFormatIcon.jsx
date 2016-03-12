import React from 'react';

module.exports = React.createClass({
    render: function() {
        if (this.props.format === 'link') {
            return <span className="lnr lnr-link Article__meta__format"></span>;
        } else {
            return <span className="lnr lnr-code Article__meta__format"></span>;
        }
    }
});