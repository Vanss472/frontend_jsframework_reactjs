console.log('loaded');

//NAVBAR
var NavBar = React.createClass({
	getInitialState: function(){
		return { focused: 0 };
	},

	clicked: function(index){
		this.setState({focused: index});
	},

	render: function() {
		var self = this;

		//use MAP to create LI elements from our navItems properties
		var navElements = this.props.navItems.map(function(title, index){

			var style = '';

			if(self.state.focused == index){
				style = 'active'
			}

			var navItem = <li className={style} onClick={self.clicked.bind(self, index)}><a href="#">{ title }</a></li>
			return navItem;
		});
		//draw our 'navElements' inside the ul
		return (
			<ul className="nav navbar-nav">
				{ navElements }
			</ul>

		);
	}
});
//draw our NavBar into the body
ReactDOM.render(<NavBar navItems={[ 'Home', 'About', 'Contact' ]} />, document.getElementById('nav'));
ReactDOM.render(<NavBar navItems={[ 'Blog', 'Careers', 'Contact' ]} />, document.getElementById('nav-footer'));


//BODY CONTENT
var HiThere = React.createClass ({
	render: function() {
		return (<h1>Hello World</h1>);
	}
});

ReactDOM.render(<HiThere />, document.getElementById('app'));


var CardContainer = React.createClass({
	render: function(){
		var cards = [];
		for(var i = 1; i <= this.props.numCards; i += 1){
			cards.push(<CardItem idNum={i}  />);
		}
		return (
			<div className="card-flex">{cards}</div>
		);
	}
});

var CardItem = React.createClass({
	render: function() {
		return(
			<div id={'card-' + this.props.idNum} className="card-flex-item"></div>
		);
	}
});

var CardContent = React.createClass({
	render: function(){
		return(
			<div className="card-flex-wrapper">
				<div className="card-flex-image">
					<img src={this.props.imgSrc} alt="img placeholder" />
				</div>
				<div className="card-flex-content">
					<h3>{this.props.headerText}</h3>
					<p>{this.props.description}</p>
					<a href={this.props.url} className="card-flex-button">Button</a>
				</div>
			</div>
		);
	}
});

//Change number of cards 1-10
ReactDOM.render(<CardContainer numCards={5} />, document.getElementById('card'));

//Card content here
ReactDOM.render(<CardContent 
	imgSrc="https://placeimg.com/640/480/nature"
	headerText="One"
	description="I'm a card and I'm first"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-1'));
ReactDOM.render(<CardContent 
	imgSrc="http://lorempixel.com/640/480/abstract/"
	headerText="Two"
	description="I'm a card and I'm Second"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-2'));
ReactDOM.render(<CardContent 
	imgSrc="http://lorempixel.com/640/480/city/"
	headerText="Three"
	description="I'm a card and I'm Third"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-3'));
ReactDOM.render(<CardContent 
	imgSrc="http://lorempixel.com/640/480/people/"
	headerText="Four"
	description="I'm a card and I'm Four"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-4'));
ReactDOM.render(<CardContent 
	imgSrc="http://lorempixel.com/640/480/food/"
	headerText="Five"
	description="I'm a card and I'm Five"
	url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-5'));
