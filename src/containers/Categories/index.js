import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { loadCategories } from '../../store/actions/weeks';

import Week from '../../components/Week';


const PaperCSS = {
    width: '250px',
    overflow: 'hidden',
    position: 'fixed',
    left: '0'
};

class Categories extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        fetch('http://localhost:8000/api/categories')
        .then(res => res.json())
        .then(json => dispatch(loadCategories(json)))
    }
    render() {
        const { weeks } = this.props;
        return (
            <Paper style={PaperCSS}>
                {weeks.map((week) => <Week key={week.id} week={week} />)}
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    return {
        weeks: state.weeks
    }
}

export default connect(mapStateToProps)(Categories);