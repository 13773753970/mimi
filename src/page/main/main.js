import React,{Component, PureComponent} from 'react';
import HeaderCon from '../../container/headerCon';
import Produce from '../../components/produce';
import PartHeader from '../../components/partHeader';
import AdvantageDesc from '../../components/advantageDesc';
import PartFourCon from '../../container/mainPartFourCon';
import Line from '../../components/line';
import Footer from '../../components/footer';
import {DomAnimation} from '../../action/doAnimationIf';
import './main.less';

class Main extends PureComponent{  //主页面
    render(){
        return (
            <div className="main-component">
                <HeaderCon></HeaderCon>
                <PartOne></PartOne>
                <PartTwo></PartTwo>
                <PartThree></PartThree>
                <PartFourCon></PartFourCon>
                <PartFive></PartFive>
                <PartSix></PartSix>
                <PartSeven></PartSeven>
                <Footer></Footer>
            </div>
        )
    }
}

class PartOne extends PureComponent{  //第一部分的图片
    render(){
        return (
            <div className="partOne-component">

            </div>
        )
    }
}

class PartTwo extends PureComponent{  //第二部分我们的产品
    render(){
        return (
            <div id="partTwo" className="partTwo-component">
                <div className="wrapper">
                    <PartHeader title="我们的产品"></PartHeader>
                    <div className="produce-container clearfix">
                        <Produce></Produce>
                        <Produce></Produce>
                        <Produce></Produce>
                        <Produce></Produce>
                    </div>
                </div>
            </div>
        )
    }
}

class PartThree extends PureComponent{  //第三部分我们的优势
    constructor(props){
        super(props);
        this.state = {
            doAnimationIf: false
        }
        this.advantageInformation = [
            {
                title: '快速便捷的审核流程',
                p: ['7*24专业代理团队','申请后3个工作日内完成审核','电话、QQ、SKYPE以及微信等多种渠道让沟通更加便捷']
            },
            {
                title: '我们的优势，您推广的利器',
                p: ['7*24专业代理团队','申请后3个工作日内完成审核','电话、QQ、SKYPE以及微信等多种渠道让沟通更加便捷']
            },
            {
                title: '高回报率的佣金制度',
                p: ['7*24专业代理团队','申请后3个工作日内完成审核','电话、QQ、SKYPE以及微信等多种渠道让沟通更加便捷']
            },
            {
                title: '报表清晰，计算简易',
                p: ['7*24专业代理团队','申请后3个工作日内完成审核','电话、QQ、SKYPE以及微信等多种渠道让沟通更加便捷']
            },
            {
                title: '特色代理VIP，业界首创，尽显尊贵',
                p: ['7*24专业代理团队','申请后3个工作日内完成审核','电话、QQ、SKYPE以及微信等多种渠道让沟通更加便捷']
            }
        ];
        this.doAnimation = this.doAnimation.bind(this);
        this.getEle = this.getEle.bind(this);
    }
    componentDidMount(){
        const part = new DomAnimation(this.ele);
        part.once('doAnimationIf', this.doAnimation)
    }
    doAnimation(){
        this.setState({
            doAnimationIf: true
        })
    }
    getEle(ele){
        if(ele){
            this.ele = ele;
        }
    }
    render(){
        return (
            <div ref={this.getEle} id="partThree" className="partThree-component">
                <div className="wrapper">
                    <PartHeader title="我们的优势"></PartHeader>
                    <div className="advantage-container clearfix">
                        {
                            this.advantageInformation.map((item, index)=>{
                                return <PartThreeLine key={index} type={index%2} 
                                            advantageInfor={item} img='right.svg' advantageWidth='400px' doAnimation={this.state.doAnimationIf}>
                                        </PartThreeLine>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

//PartFour单独放在外面

class PartFive extends Component{  //第五部分
    constructor(props){
        super(props);
        this.state = {
            doAnimationIf: false,
            textOne: '',
            textTwo: '',
            textThree: '',
        };
        this.speed = 200;  //打字速度
        this.msg = ['今天天气不错', '爱你一万年', '一生只爱一人刷稍等哈师大啥时候打猴神大叔'];
        this.doAnimation = this.doAnimation.bind(this);
        this.getEle = this.getEle.bind(this);
    }
    componentDidMount(){
        const part = new DomAnimation(this.ele);
        part.once('doAnimationIf', this.doAnimation)
    }
    getEle(ele){
        if(ele){
            this.ele = ele;
        }
    }
    doAnimation(){ //打字器
        this.setState({
            doAnimationIf: true
        });
        let typewriter = setInterval(()=>{ //打字器
            if(this.state.textOne.length === this.msg[0].length && this.state.textTwo.length === this.msg[1].length && this.state.textThree.length === this.msg[2].length){
                return clearInterval(typewriter);
            }
            this.setState(prevState=>{
                let prevLengthOne = prevState.textOne.length;
                let prevLengthTwo = prevState.textTwo.length;
                let prevLengthThree = prevState.textThree.length;
                return {
                    textOne: prevLengthOne === this.msg[0].length ? this.msg[0] : this.msg[0].substring(0, prevLengthOne + 1),
                    textTwo: prevLengthTwo === this.msg[1].length ? this.msg[1] : this.msg[1].substring(0, prevLengthTwo + 1),
                    textThree: prevLengthThree === this.msg[2].length ? this.msg[2] : this.msg[2].substring(0, prevLengthThree + 1)
                }
            })       
        },this.speed)
    }
    render(){
        return (
            <div ref={this.getEle} id="partFive" className="partFive-component">
                <PartHeader title="详细计划"></PartHeader>
                <div className="partFive-container">
                    <Line>
                        <div width='50%' className={`left-to-right calendar-container ${this.state.doAnimationIf ? 'end' : 'begin'}`}>
                            
                        </div>
                        <div width='50%' className="typewriter-container">
                            <h2>{this.state.textOne}</h2>
                            <h2>{this.state.textTwo}</h2>
                            <h2>{this.state.textThree}</h2>
                        </div>
                    </Line>
                </div>
            </div>
        )
    }
}

class PartSix extends PureComponent{  //第六部分
    constructor(props){
        super(props);
        this.text = [
            ['hello'],
            ['哎哟','不错哦'],
            ['you are', 'best'],
            ['BYEBYE']
        ]
    }
    render(){
        return (
            <div id="partSix" className="partSix-component">
                <PartHeader title="未知"></PartHeader>
                <div className="partSix-container clearfix">
                    <div style={{width: '50%', float: 'left'}}>
                        <ul>
                            {
                                this.text.map((item, index)=>{
                                    return <PartSixLine delay={`${index/10}s`} text={item} key={index}></PartSixLine>
                                })
                            }
                        </ul>
                    </div>
                    <div style={{width: '50%', float: 'left'}}>
                        <img className="rightImg bounceInRight wow animated" src="/image/partSix.jpg" alt=""/>
                    </div>
                </div>
            </div>
        ) 
    }
}

class PartSeven extends PureComponent{  //第七部分
    render(){
        return (
            <div id="partSeven" className="partSeven-component">
                <div className="header">
                    <h1>客户端下载</h1>
                    <h2>提供电脑客户端和手机客户端下载，真正做到随时随地</h2>
                </div>
                <ul className="partSeven-container clearfix">
                    <li className="wow animated fadeInUpBig" data-wow-delay="0.3s">
                        <img src="/image/right.svg" alt=""/>
                        <h3>Mac系统</h3>
                    </li>
                    <li className="wow animated fadeInUpBig" data-wow-delay="0.6s">
                        <img src="/image/right.svg" alt=""/>
                        <h3>Mac系统</h3>
                    </li>
                    <li className="wow animated fadeInUpBig" data-wow-delay="0.9s">
                        <img src="/image/right.svg" alt=""/>
                        <h3>Mac系统</h3>
                    </li>
                    <li className="wow animated fadeInUpBig" data-wow-delay="1.2s">
                        <img src="/image/right.svg" alt=""/>
                        <h3>Mac系统</h3>
                    </li>
                </ul>
            </div>
        )
    }
}

class PartThreeLine extends PureComponent{  //partThree里面的一行
    render(){  //惰性函数 只需判断一次类型
        if(this.props.type === 1){
            return (this.render = function(){
                const {advantageInfor, img, advantageWidth, doAnimation} = this.props;
                return (
                    <Line style={{padding: '50px 0'}}>
                        <div width='50%' className={`left-to-right ${doAnimation ? 'end' : 'begin'}`} style={{width: advantageWidth}}>
                            <AdvantageDesc to='right' title={advantageInfor.title} p={advantageInfor.p} color='rgba(32, 147, 192, 0.603)'></AdvantageDesc>
                        </div>
                        <div width='10%' overflow='hidden' className={`top-to-bottom ${doAnimation ? 'end' : 'begin'}`}>
                            <img src="/image/coor.svg" alt="" style={{width: '50px', height: '50px'}}/>
                        </div>
                        <div width='40%' className={`right-to-left ${doAnimation ? 'end' : 'begin'}`}>
                            <img src={`/image/${img}`} alt="" style={{width: '170px', height: '170px'}}/>
                        </div>
                    </Line>
                )
            }).call(this);
        }else{
            return (this.render = function(props){
                const {advantageInfor, img, advantageWidth, doAnimation} = this.props;
                return (
                    <Line style={{padding: '50px 0'}}>
                        <div width='40%' className={`left-to-right ${doAnimation ? 'end' : 'begin'}`}>
                            <img src={`/image/${img}`} alt="" style={{width: '170px', height: '170px'}}/>
                        </div>
                        <div width='10%' overflow='hidden' className={`top-to-bottom ${doAnimation ? 'end' : 'begin'}`}>
                            <img src="/image/coor.svg" alt="" style={{width: '50px', height: '50px'}}/>
                        </div>
                        <div width='50%' className={`right-to-left ${doAnimation ? 'end' : 'begin'}`} style={{width: advantageWidth}}>
                           <AdvantageDesc to='left' title={advantageInfor.title} p={advantageInfor.p} color='rgba(32, 147, 192, 0.603)'></AdvantageDesc>
                        </div>
                    </Line>
                )
            }).call(this);
        }
    }
}

class PartSixLine extends PureComponent{  //partSix里面的一行
    render(){
        const {delay, text} = this.props;
        return (
            <li className="partSixLine-component clearfix bounceInLeft animated wow" data-wow-delay={delay}>
                <div className="text-container">
                    <div className="text">
                        {
                            text.map((item, index)=>{
                                return <h2 key={index}>{item}</h2>
                            })
                        }
                    </div>
                </div>
                <img src="/image/coor.svg" alt=""/>
            </li>
        )
    }
}

export default Main;
