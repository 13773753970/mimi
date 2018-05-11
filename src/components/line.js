import React,{PureComponent} from 'react';
import './line.less';

class Line extends PureComponent{   //自定义行内模板
    render(){
        const {style, children} = this.props;
        return (
            <div className="line-component clearfix" style={style}>
                {
                    children.map((item, index)=>{
                    return  <div key={index} className="line-chunk clearfix" style={{width: item.props.width, overflow: item.props.overflow}}>
                                {item}
                            </div>
                    })
                }      
            </div>
        )
    }
}

export default Line;