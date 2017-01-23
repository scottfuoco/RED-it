import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Week from '../../components/Week';
import { data } from '../../mock-data';

const PaperCSS = {
    width: '250px',
    overflow: 'hidden',
    position: 'fixed',
    left: '0'
};

class Categories extends Component {
    render() {
        return (
            <Paper style={PaperCSS}>
                { data.weeks.map((week) => <Week key={week.id} week={week} />) }
            </Paper>
        )
    }
}

export default Categories;