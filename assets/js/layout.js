console.log('loaded');

var HiThere = React.createClass ({
	render: function() {
		return ( <h1>Hello World</h1> );
	}
});

ReactDOM.render(<HiThere />, document.getElementById('app'));