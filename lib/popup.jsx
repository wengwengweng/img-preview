/**
 * 图片预览
 * autohr: wengrunyu@meituan.com
 */
import React, { PureComponent } from 'react'
import Img from './img.js';

class Popup extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(props) {
    console.log(props)
    this.handleReset()
  }
  handleOnload = () => {
    this.newImg = new Img(this.img)
    this.newImg.initializePosition()
  }
  handleClick = (e) => {
    // 防止触发关闭事件
    e.stopPropagation()
  }
  handleShrink = () => {
    this.newImg.shrink()
    this.newImg.centered()
    this.newImg.render()
  }
  handleEnlarge = () => {
    this.newImg.enlarge()
    this.newImg.centered()
    this.newImg.render()
  }
  handleTurnLeft = () => {
    this.newImg.turnLeft()
    this.newImg.centered()
    this.newImg.render()
  }
  handleTurnRight = () => {
    this.newImg.turnRight()
    this.newImg.centered()
    this.newImg.render()
  }
  handleReset = () => {
    this.newImg.reset()
    this.newImg.centered()
    this.newImg.render()
  }

  render() {
    return (
      <div className="img-preview-popup">
        <img
          src={this.props.src}
          onClick={this.handleClick}
          ref={(img) => { this.img = img }}
          onLoad={this.handleOnload}
        />
        <div className="toolbar">
          <ul onClick={this.handleClick}>
            <li className="iconfont icon-enlarge"  onClick={this.handleEnlarge}/>
            <li className="iconfont icon-shrink" onClick={this.handleShrink}/>
            <li className="iconfont icon-turn-left" onClick={this.handleTurnLeft}/>
            <li className="iconfont icon-turn-right" onClick={this.handleTurnRight}/>
            <li className="iconfont icon-refresh"  onClick={this.handleReset}/>
          </ul>
        </div>
      </div>
    )
  }
}


export default Popup
