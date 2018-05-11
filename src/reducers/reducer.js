/**
 * Created by zhoupeng on 2017/12/29.
 */
const reducer = function (state, action) {
    switch (action.type){
        case 'CHANGE_STAGES': // 改变详细计划数据
            return Object.assign({}, state, {
                stagesData: action.stagesData
            });
        default: return state;
    }
};

export default reducer;