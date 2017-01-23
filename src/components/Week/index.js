import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';

const width = {
    width: '100%'
}

const LinkCSS={
    textDecoration: 'none'
}

const Week = ({week}) => {
    return (
        <List style={width}>
            <Subheader style={width} inset={false}>{week.title}</Subheader>
            <Divider style={width} />
            {week.categories.map((category, i) => {
                return (
                    <Link to='posts' key={i} style={LinkCSS}><ListItem>{category}</ListItem></Link>
                )
            })}
        </List>
    );
};

export default Week;