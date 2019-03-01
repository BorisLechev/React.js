import React, { Component } from 'react';

class BindingForm extends Component {
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        this.props.children.forEach(child => {
            if (child.type === 'input') {
                this.setState({
                    [child.props.name]: null
                });
            }
        });
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.props.onSubmit(event, this.state)}>
                {React.Children.map(this.props.children, child => {
                    if (child.type === 'input') {
                        return React.cloneElement(child, { onChange: this.handleChange.bind(this), ...child.props });
                    }

                    return child;
                })}
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default BindingForm;