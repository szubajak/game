import * as React from 'react'
import { render } from 'react-dom'

const App: React.FC = () => (
    <div>
        <strong>Test</strong>
    </div>
)

render(<App />, document.getElementById('root'))
