import {connect} from 'react-redux';
import Header from '../components/header';
import {scrollToAction} from '../action/mainAction';

function mapStateToProps(state){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        scrollTo(domId){  //平滑滚动到dom所在位置
            dispatch(scrollToAction(document.getElementById(domId)));
        }
    }
}

const HeaderCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderCon;