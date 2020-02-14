import * as React from 'react'
import { render } from 'react-dom'
import Layout from '~/Components/Layout/Layout.component'

const App: React.FC = () => (
    <Layout />
)

render(<App />, document.getElementById('root'))
