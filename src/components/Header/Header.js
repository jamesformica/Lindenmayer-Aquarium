import React, { Component, Fragment } from 'react'

import './Header.css'
import HowItWorks from '../HowItWorks/HowItWorks';

class Header extends Component {
  constructor() {
    super()
    this.state = { editorOpen: false }

    this.openEditor = this.openEditor.bind(this)
    this.closeEditor = this.closeEditor.bind(this)
  }

  openEditor() { this.setState({ editorOpen: true }) }

  closeEditor() { this.setState({ editorOpen: false }) }

  render() {
    const { editorOpen } = this.state

    return (
      <Fragment>
        <div className="Header">
          <button type="button" onClick={this.openEditor} className="Header__button">
            What&apos;s all this?
          </button>
        </div>

        <HowItWorks editorOpen={editorOpen} closeEditor={this.closeEditor} />
      </Fragment>
    )
  }
}

export default Header
