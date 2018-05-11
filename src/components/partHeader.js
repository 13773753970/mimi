import React,{PureComponent} from 'react';
import './partHeader.less';

class PartHeader extends PureComponent{
    render(){
        const {title, style} = this.props;
        return (
            <div style={style} className="partHeader-component">
                <h1>{title}</h1>
            </div>
        )
    }
}

export default PartHeader;