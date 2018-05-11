import React,{PureComponent} from 'react';
import PartHeader from '../../components/partHeader';

class PartFour extends PureComponent{   //第四部分计划详情
    componentDidMount(){
        this.props.loadStages();   //加载数据
    }
    format(){  //格式化数字

    }
    render(){
        const {stagesData} = this.props;
        return (
            <div id="partFour" className="partFour-component">
                <PartHeader title="计划详情"></PartHeader>
                <table>
                    <thead>
                        <tr>
                            <td>profit</td>
                            <td>活跃用户</td>
                            <td>rate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stagesData.stat &&
                            stagesData.data.stages.map(item=>{
                                return <tr key={item.level}>
                                    <td>{`${item.profit.min} - ${item.profit.max}`}</td>
                                    <td>{`≥${item.activeUsers}`}</td>
                                    <td>{`${item.rate * 100}%`}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className="partFour-footer">
                    <h2>*今天天气不错</h2>
                    <h2>*今天天气不错</h2>
                    <h2>*今天天气不错</h2>
                </div>
            </div>
        )
    }
}

export default PartFour;