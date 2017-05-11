import React ,{PropTypes} from 'react';

const propTypes = {

};
function  CreateBar({onClick}){
    return (
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">
            + 创建新的文章
        </a>
    )
}
CreateBar.propTypes = propTypes;
export  default CreateBar;