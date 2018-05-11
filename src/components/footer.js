import React,{Component} from 'react';
import './footer.less';

class Footer extends Component{
    constructor(props){
        super(props);
        this.footItems = [
            {
                text: '关于我们'
            },
            {
                text: '常见问题'
            },
            {
                text: '联系我们'
            },
            {
                text: '服务条款'
            },
            {
                text: '免费声明'
            },
            {
                text: '隐私政策责任'
            },
            {
                text: '代理加盟'
            },
            {
                text: '社交关注'
            }
        ]
    }
    render(){
        return (
            <div className="footer-component">
                <ul className="clearfix">
                    {
                        this.footItems.map((item, index)=>{
                            return <li key={index}>{item.text}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Footer;