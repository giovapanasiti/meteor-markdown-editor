import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount(){
        // This thing is gonna be called only one time as soon as the component is rendered

        /*render the blaze accounts form then find the div we just rendered in the render method
        and place the Blaze accounts form in that div*/

        this.view = Blaze.render(Template.loginButtons, 
            ReactDOM.findDOMNode(this.refs.container));

    }

    componentWillUnmount() {
        // This thing is going to be called as soon as the component is going to be removed from the screen

        /*Go find the forms we created and destroy them. We need to clean up those forms ourselves*/
        Blaze.remove(this.view);

    }

    render() {
        return (
            /*Place for some JSX*/
            <div ref="container"></div>
        );
    }
};

export default Accounts;