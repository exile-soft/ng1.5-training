
function changeUserName(name){ 
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

function testUser($ngRedux, name){
	$ngRedux.dispatch({type: 'TEST_USER', payload: name});
}

testUser.$inject = ['$ngRedux'];

export default { changeUserName, testUser };  