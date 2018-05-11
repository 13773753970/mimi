import {connect} from 'react-redux';
import PartFour from '../page/main/partFour';
import {loadStagesAsync} from '../action/mainAction';

function mapStateToProps(state){
    return {
        stagesData: state.stagesData
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadStages(){
            dispatch(loadStagesAsync);   //异步加载表格数据
        }
    }
}

const PartFourCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(PartFour);

export default PartFourCon;