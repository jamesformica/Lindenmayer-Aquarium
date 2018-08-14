import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import paint from './canvas'
import Header from './components/Header/Header'

global.window.onload = paint
Modal.setAppElement('#root')

ReactDOM.render(<Header />, global.document.getElementById('root'))
