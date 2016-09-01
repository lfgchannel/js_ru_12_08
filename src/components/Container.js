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
                <ArticleList articles = {this.filterArticles()} />
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

    filterArticles = () => {
        const { articles, filter } = this.props,
              { range, selected } = filter,
              { from, to } = range

        return articles.filter(item => {
            const itemDate = Date.parse(item.date),
                  fromDate = Date.parse(range.from),
                  toDate = Date.parse(range.to)

            if ( selected.length > 0 && from && to ) {
                return selected.some(sel => {
                    return ( sel.value == item.id ) && ( itemDate > fromDate && itemDate < toDate )
                })
            } else if ( from && to ) {
                return itemDate > fromDate && itemDate < toDate
            } else if ( selected.length > 0 ) {
                return selected.some(sel => sel.value == item.id)
            }

            return true
        })

    }
}

export default connect((state) => {
    const { articles, filter } = state
    return { articles, filter }
}, { filterSelect, filterRange }
)(Container)
