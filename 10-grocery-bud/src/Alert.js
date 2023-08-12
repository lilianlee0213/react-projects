import React, {useEffect} from 'react';

const Alert = ({type, msg, showAlert}) => {
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
