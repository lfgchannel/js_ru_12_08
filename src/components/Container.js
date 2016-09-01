import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import DaypickerContainer from './DaypickerContainer'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { filterSelect, filterRange } from '../AC/filter'

class Container extends Component {
    static propTypes = {

    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <ArticleList articles = {this.props.articles} />
                <Select options = {options} value={this.props.filter.selected} onChange = {this.handleSelectChange} multi={true}/>
                <DaypickerContainer range = {this.props.filter.range} filterRange={this.props.filterRange} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleSelectChange = (selected) => {
        const { filterSelect } = this.props
        filterSelect(selected)
    }
}

export default connect((state) => {
    const { articles, filter } = state
    return { articles, filter }
}, { filterSelect, filterRange }
)(Container)
