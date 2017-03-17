import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default class Root extends Component {
	getIssueUrl() {
		return window.location.pathname;
	}

  render() {
    return (
      <Provider store={store}>
        <AsyncApp issueUrl={this.getIssueUrl()} />
      </Provider>
    )
  }
}