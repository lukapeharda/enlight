import React from 'react';

module.exports = React.createClass({
    render: function() {
        let linkPrev = '/page/' + (parseInt(this.props.current) - 1);
        let linkNext = '/page/' + (parseInt(this.props.current) + 1);
        return (
            <nav className="Pagination">
                {
                    ( this.props.prev ) ?
                    <a className="Pagination__prev" href={ linkPrev }>Previous</a> :
                    null
                }
                {
                    ( this.props.next ) ?
                    <a className="Pagination__next" href={ linkNext }>Next</a> :
                    null
                }
            </nav>
        );
    }
});