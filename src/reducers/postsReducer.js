import { FETCH_POST } from '../actions/types';

export default (state=null, action) => {
	if(action.type === FETCH_POST) {
			return  action.payload
	
	}else {
		return state;
	}
}