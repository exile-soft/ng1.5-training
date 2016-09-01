
function changeUserName(name){ 
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

export default { changeUserName };  