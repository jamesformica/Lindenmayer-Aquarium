import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import JsonFormatter from '../JsonFormatter/JsonFormatter'
import trees from '../../canvas/trees.json'
import seaweed from './seaweed.png'
import './HowItWorks.css'

const customStyles = {
  overlay: {
    background: 'rgba(20, 10, 80, 0.8)',
  },
  content: {
    border: '2px solid blueviolet',
    maxWidth: '40rem',
    margin: '0 auto',
    padding: '2.5rem',
  },
}

const HowItWorks = ({ editorOpen, closeEditor }) => (
  <Modal isOpen={editorOpen} onRequestClose={closeEditor} style={customStyles}>
    <button type="button" className="HIW__closebutton" onClick={closeEditor}>close</button>

    <h1>Lindenmayer Aquarium</h1>
    <p>James Formica <br />August 2018</p>

    <h2>What&apos;s all this?</h2>

    <p>
      This is an HTML Canvas app that displays various Lindenmayer Systems (L-Systems) as
      fishtank plants. Below I will go through what an L-System is (in my own words) and why
      they are awesome! If you want a more formal explanation, I suggest doing a quick Google.
    </p>

    <h2>What is an L-System?</h2>

    <p>
      In short, an L-System is a set of rules that when followed and drawn can represent botanical
      plants. For this to work, there are three things you need:
    </p>

    <ol>
      <li>An alphabet</li>
      <li>An axiom</li>
      <li>Some rules</li>
    </ol>

    <h3>Alphabet</h3>

    <p>The most common (and the one used here) alphabet consists of the following five characters:
      <b> F + - [ ]</b>
    </p>

    <h3>Axiom</h3>

    <p>
      The axiom is simply the starting point. It seems very common that it is a single character
      (usually the letter F or X - which is not in our alphabet I know) but it can be
      absolutely anything really.
    </p>

    <h3>Rules</h3>

    <p>
      Ok, this is the super important bit. We need to define some rules which will be operated
      on the axiom. The rules are simple string substitution. Let&apos;s consider the following
      rule:
    </p>

    <JsonFormatter json={trees.trees[0].rules[0]} />

    <p>
      What this is saying is: If we see the letter <code>F</code> then replace it with the string
      <code> FX[FX[+XF]]</code>
    </p>

    <p>
      For example, if our axiom is <code>F</code> then after we run the rule, the result would be
      <code> FX[FX[+XF]]</code>. And if we then ran the rule again it would grow to be
      <code> FX[FX[+XF]]X[FX[FX[+XF]]X[+XFX[FX[+XF]]]]</code>
    </p>

    <p>
      As you can see, the resulting sentence grows very, very quickly. So this is cool and all
      but now we have this sentence of random garbage, how exactly do we turn that into seaweed?
    </p>

    <h2>Drawing an L-System?</h2>

    <p>
      In truth, drawing the generated sentence is quite simple. We begin at the start of our
      generated sentence and do certain things depending on what the character is by following
      these rules:
    </p>

    <ul>
      <li>
        <code>&apos;F&apos;</code>&nbsp;&nbsp;go straight by x amount
      </li>
      <li>
        <code>&apos;-&apos;</code>&nbsp;&nbsp;turn left by x degrees
      </li>
      <li>
        <code>&apos;+&apos;</code>&nbsp;&nbsp;turn right by x degrees
      </li>
      <li>
        <code>&apos;[&apos;</code>&nbsp;&nbsp;save the current state in a stack
      </li>
      <li>
        <code>&apos;]&apos;</code>&nbsp;&nbsp;restore the state from the top of the stack
      </li>
    </ul>

    <p>
      Running the rules tends to generate very repetitive patterns that look beautiful when
      the above rules are applied and the result is drawn.
    </p>

    <h2>Example</h2>

    <p>
      The following is an example of a fully generated sentence when the following set of
      instructions is applied:
    </p>

    <h3>The rules:</h3>

    <JsonFormatter json={{ axiom: trees.trees[0].axiom, rules: trees.trees[0].rules }} />

    <p>
      After applying the above rules {trees.trees[0].iterations} times we end up with...
    </p>

    <h3>The sentence:</h3>

    <code>
      { /* eslint-disable-next-line */}
      FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]]][+FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]][-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]][+FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]][++[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]][-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]]][+[+FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]][++[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]][-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]]][-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]][-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]][+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]-FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]][+[+FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]]][++[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]][-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]++FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][FX[FX[+XF]]FF[+XZ++X-F[+ZX]][-X++F-X][+FF[+XZ++X-F[+ZX]][-X++F-X]FX[FX[+XF]]]]-FX[FX[+XF]]FX[FX[+XF]][+FF[+XZ++X-F[+ZX]][-X++F-X][+F-X-F][++ZX]++FF[+XZ++X-F[+ZX]][-X++F-X]-FX[FX[+XF]][+[+F-X-F][++ZX]FF[+XZ++X-F[+ZX]][-X++F-X]]][-FF[+XZ++X-F[+ZX]][-X++F-X]++FX[FX[+XF]]-FF[+XZ++X-F[+ZX]][-X++F-X]]]]
    </code>

    <p>And when we apply our drawing rules to each character in our massive sentence, we get...</p>

    <h3>The result:</h3>

    <img width="500" src={seaweed} alt="seaweed" />

    <p>
      Mind === blown!
    </p>
  </Modal>
)

HowItWorks.propTypes = {
  editorOpen: PropTypes.bool.isRequired,
  closeEditor: PropTypes.func.isRequired,
}

export default HowItWorks
