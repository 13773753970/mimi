import React,{PureComponent} from 'react';
import './produce.less';

class Produce extends PureComponent{   //我们的产品
    render(){
        return (
            <div className="produce-component wow zoomIn animated ">
                <img src="/image/product.jpg" alt=""/>
                <h2>Bench</h2>
            </div>
        )
    }
}

export default Produce;