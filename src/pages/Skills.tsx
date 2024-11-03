import { JSX } from 'react'
import { Title } from '../components/Title'

export default function Skills(): JSX.Element {
    return (
        <>
            <div>
                <Title title={"Skills"} />
                <p>What I'm using the most.</p>
            </div>
            <div>
            {/* TODO: card component */}
                <div>
                    <h2>HTML5</h2>
                    <p>Description lorem ipsum</p>
                    <img src="" alt="logo html5" />
                </div>
            {/* TODO: ... */}
            </div>
        </>
    )
}