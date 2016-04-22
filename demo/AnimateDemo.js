/**
 * Animate Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Animate = require('../src');
let Select = require('uxcore-select2');
let Button = require('uxcore-button');
let Dialog = require('uxcore-dialog');
let Tooltip = require('uxcore-tooltip');
let Popover = require('uxcore-popover');
let Message = require('uxcore-message');

class ButtonWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: !!this.props.visible ? 'inline-block' : 'none' }}>
              <Button>
                {this.props.name}
              </Button>
            </div>
        )
    }
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogEffect: 'fade',
            tipEffect: 'zoom'
        }
    }

    renderButton() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<ButtonWrap key={i} name={"Button" + i} visible={this.state.visible} />)
        }
        return arr;
    }

    handleVisibleChange() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleChange(value) {
        this.setState({
            dialogEffect: value
        })
    }


    handleChange2(value) {
        this.setState({
            tipEffect: value
        })
    }

    handleMessageClick() {
        Message.success("这是一个 success");
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        let me = this;
        let overlay = <div>
                        <div className="demoContent">
                          <i className="kuma-icon kuma-icon-information"></i>
                          <span>这是一个气泡弹窗</span>
                        </div>
                      </div>;
        return (
            <div>
              <h1>对话框动画展示</h1>
              <Dialog visible={me.state.visible} transitionName={me.state.dialogEffect} onCancel={me.handleCancel.bind(me)}>
                <span>测试</span>
              </Dialog>
              <div>
                <Select className="demo-select" placeholder="请选择动画效果" defaultValue={me.state.dialogEffect} onChange={me.handleChange.bind(me)} transitionName="slideUp">
                  {['fade', 'slideRight', 'slideDown', 'newspaper', 'fall', 'threeFallH', 'threeFallV', 'threeSign', 'superScale', 'threeSlit', 'threeRotateBottom', 'threeRotateLeft'].map((item, index) => {
                       return <Select.Option key={item}>
                                {item}
                              </Select.Option>
                   })}
                </Select>
              </div>
              <Button onClick={me.handleVisibleChange.bind(this)}>测试</Button>
              <h1>提示框动画展示</h1>
              <p style={{ color: 'grey' }}>包括 flip/crop/zoom</p>
              <div>
                <div>
                  <Select className="demo-select" placeholder="请选择动画效果" defaultValue={me.state.tipEffect} onChange={me.handleChange2.bind(me)} transitionName="slideUp">
                    {['crop', 'flip', 'zoom'].map((item, index) => {
                         return <Select.Option key={item}>
                                  {item}
                                </Select.Option>
                     })}
                  </Select>
                </div>
                <Tooltip placement="top" overlay={overlay} placement='right' trigger={['hover']} transitionName={me.state.tipEffect}>
                  <Button>动画效果</Button>
                </Tooltip>
              </div>
              <h1>全局提醒动画展示</h1>
              <div>
                <Button onClick={me.handleMessageClick.bind(me)}>显示成功提示</Button>
              </div>
            </div>
            );
    }
}
;

module.exports = Demo;
