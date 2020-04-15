import React from 'react'

export default () => (
    <div>
        <div className="vasya" style={{border: '1px solid gray'}}>
            <label for="name">Enter your name: </label>
            <input type="text" id="name" />
        </div>
        <p>Some text here</p>
    </div>
)