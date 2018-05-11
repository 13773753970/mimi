import React,{Component} from 'react';
import './header.less';

class Header extends Component{
    constructor(props){
        super(props);
        this.headerList = [
            {
                text: '澳洲合营',
                domId: 'partTwo'
            },
            {
                text: '优势亮点',
                domId: 'partThree'
            },
            {
                text: '计划详情',
                domId: 'partFour'
            },
            {
                text: '注册'
            },
            {
                text: '登录'
            }
        ];
        this.state = {
            moreListOpen: false
        }
        this.toggleMoreList = this.toggleMoreList.bind(this);
        this.phoneTo = this.phoneTo.bind(this);
    }
    // scrollTo(id){
    //     const ele = document.getElementById(id);
    //     const offsetTop = ele.offsetTop; //元素距离顶部的长度， 页面布局不变的情况下是固定值
    //     window.scrollTo(0, offsetTop - 50);
    // }
    phoneTo(id){
        this.props.scrollTo(id);
        this.toggleMoreList();
    }
    toggleMoreList(){
        this.setState((prevState)=>({
            moreListOpen: !prevState.moreListOpen
        }));           
    }
    render(){
        const {scrollTo} = this.props;
        return (
            <div className="header-component">
                <div className="wrapper clearfix">
                    <a className="logo" href="/">
                        <img src="/image/logo.jpeg" alt=""/>
                    </a>
                    <ul className="header-list clearfix">
                        {
                            this.headerList.map((item,index)=>{
                                return <li key={index} onClick={item.domId ? scrollTo.bind(null, item.domId) : ()=>{}}>{item.text}</li>
                            })
                        }
                    </ul>
                    <div className="more">
                        <img onClick={this.toggleMoreList} src="/image/more.svg" alt="more"/>
                        <ul style={{display: this.state.moreListOpen ? 'block' : 'none'}}className="more-list clearfix">
                            {this.headerList.map((item,index)=>{
                                return <li key={index} onClick={item.domId ? this.phoneTo.bind(null, item.domId) : ()=>{}}>{item.text}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;