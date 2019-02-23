import React from 'react';
import SimpleSnackbar from './Snackbar.jsx';

const AppFooter = (props) => (<SimpleSnackbar showSnack={props.showSnack}
message={props.message}/>);

export default AppFooter;