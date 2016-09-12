import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import React from 'react'
import CounterPage from './RouteHandlers/CounterPage'
import FiltersPage from './RouteHandlers/FiltersPage'
import ArticlesPage from './RouteHandlers/ArticlesPage'
import ArticlePage from './RouteHandlers/ArticlePage'
import AllCommentsPage from './RouteHandlers/AllCommentsPage'
import CommentPage from './RouteHandlers/CommentPage'

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root} >
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
            <Route path = "articles" component = {ArticlesPage} >
                <Route path = ":id" component = {ArticlePage} />
            </Route>
            <Route path = "comments" component = {AllCommentsPage} >
                    <Route path = ":page" component = {CommentPage} />
            </Route>
            {/*<Route path = "/articles/:id" component = {ArticlePage} />*/}
        </Route>
    </Router>
)
