import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';

const flatButtonCSS = {
  color: 'white'
}

const HeaderBar = () => (
  <AppBar
    title="RED it"
    iconElementLeft={<IconButton><ImportContacts /></IconButton>}
    iconElementRight={<span><FlatButton style={flatButtonCSS} label="Share a new Link" /><FlatButton style={flatButtonCSS} label="Logout" /></span>}
  />
);

export default HeaderBar;
