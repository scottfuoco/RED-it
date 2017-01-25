import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import slug from 'slug';

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
                    <Link
                        to={{
                            pathname:`/posts/${slug(category)}`,
                            query: { sort: 'popular'}
                        }}
                        key={i}
                        style={LinkCSS}
                     ><ListItem>{category}</ListItem></Link>
                )
            })}
        </List>
    );
};

export default connect()(Week);