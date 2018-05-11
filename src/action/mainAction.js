import {put, call, take, fork} from 'redux-saga/effects';

export function changeStages(stages){  // 更改详细计划数据
    return {
        type: 'CHANGE_STAGES',
        stagesData: stages
    }
}

export function scrollToAction(dom){
    return {
        type: 'SCROLL_TO',
        dom: dom
    }
}

export const loadStagesAsync = {
    type: 'LOAD_STAGES_ASYNC'
}

export function loadStages(){   //加载详细计划数据
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve(stagesData)
        }, 1000)   //模拟请求过程
    })
}

export function* watchStagesAsync(){   //监听action{type: 'LOAD_STAGES_ASYNC'}
    yield take('LOAD_STAGES_ASYNC');
    const stages = yield call(loadStages);
    yield put(changeStages(stages));
}

export function* scrollTo(ele){  //平滑滚动到元素位置
    const top = ele.offsetTop;  //元素距离顶部的距离
        let timer = setInterval(()=>{  //开始定时器
            let scrollTop = window.pageYOffset;  //滚动条距离顶部的距离
            let speed = (top - scrollTop)/2;  //加速度，目标距离顶部的距离-此时滚动条距离顶部的距离
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);   //大于0向上取整，小于0向下取整
            if(scrollTop === top){  //当目标距离顶部的距离 = 此时滚动条距离顶部的距离
                clearInterval(timer);   //证明时间完成，清除定时器
                
            }else{
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
                //否则，scrollTop和speed会不断改变，直到滚动到目标位置。
            }
        }, 50);
        let {dom} = yield take('SCROLL_TO');
        clearInterval(timer);
        yield call(scrollTo, dom);
}

export function* watchScrollTo(){  //监听header里标签点击事件 action{type: 'SCROLL_TO', dom: dom}
    while(true){
        let {dom} = yield take('SCROLL_TO');
        yield call(scrollTo, dom);
    }
}

const stagesData = {
    "data": {
        "stages": [
            {
                "level": 1,
                "activeUsers": 5,
                "profit": {
                    "min": 1,
                    "max": 50000
                },
                "rate": "0.30",
                "timestamps": {
                    "createdAt": "2018-03-23T10:32:57+00:00",
                    "updatedAt": "2018-03-23T10:32:59+00:00"
                }
            },
            {
                "level": 2,
                "activeUsers": 5,
                "profit": {
                    "min": 50001,
                    "max": 100000
                },
                "rate": "0.35",
                "timestamps": {
                    "createdAt": "2018-03-23T10:33:32+00:00",
                    "updatedAt": "2018-03-23T10:33:33+00:00"
                }
            },
            {
                "level": 3,
                "activeUsers": 15,
                "profit": {
                    "min": 100001,
                    "max": 1000000
                },
                "rate": "0.45",
                "timestamps": {
                    "createdAt": "2018-03-23T10:33:32+00:00",
                    "updatedAt": "2018-03-23T10:33:33+00:00"
                }
            },
            {
                "level": 4,
                "activeUsers": 30,
                "profit": {
                    "min": 1000001,
                    "max": 99999999
                },
                "rate": "0.50",
                "timestamps": {
                    "createdAt": "2018-03-23T10:33:32+00:00",
                    "updatedAt": "2018-03-23T10:33:33+00:00"
                }
            }
        ]
    },
    "stat": "ok"
}
