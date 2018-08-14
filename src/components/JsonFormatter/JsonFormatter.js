import React from 'react'
import PropTypes from 'prop-types'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/JSONPretty.monikai.styl'

const JsonFromatter = ({ json }) => (
  <JSONPretty id="json-pretty" json={json} />
)

JsonFromatter.propTypes = {
  json: PropTypes.object.isRequired,
}

export default JsonFromatter
