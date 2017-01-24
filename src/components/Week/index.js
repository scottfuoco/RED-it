import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';
import { setPostFilter } from '../../store/actions/postFilter';
import { connect } from 'react-redux';

const width = {
    width: '100%'
}

const LinkCSS={
    textDecoration: 'none'
}

const Week = ({week, dispatch}) => {
    return (
        <List style={width}>
            <Subheader style={width} inset={false}>{week.title}</Subheader>
            <Divider style={width} />
            {week.categories.map((category, i) => {
                return (
                    <Link onClick={() => dispatch(setPostFilter(category))} to='posts' key={i} style={LinkCSS}><ListItem>{category}</ListItem></Link>
                )
            })}
        </List>
    );
};

export default connect()(Week);