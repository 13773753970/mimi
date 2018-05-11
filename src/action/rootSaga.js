import {watchStagesAsync, watchScrollTo} from './mainAction';

export default function* rootSaga(){
    yield [
        watchStagesAsync(),
        watchScrollTo(),
    ]
}