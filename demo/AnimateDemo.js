/**
 * Animate Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Animate = require('../src');

let Button = require('uxcore-button');

class ButtonWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{
                display: !!this.props.visible ? 'block' : 'none'
            }}>
                <Button>{this.props.name}</Button>
            </div>
        ) 
    }
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderButton() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<ButtonWrap key={i} name={"Button" + i} visible={this.state.visible}/>)
        }
        return arr;
    }

    handleVisibleChange() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        let me = this;
        return (
            <div>
                <Animate transitionName="slide-left" transitionAppear={true} showProp='visible'>
                    {me.renderButton()}
                </Animate>
                <div>
                    <Button onClick={me.handleVisibleChange.bind(me)}>进入/退出动画</Button>
                </div>
            </div>
        );
    }
};

module.exports = Demo;
