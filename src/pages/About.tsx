import { JSX } from 'react'
import './About.css'
import { Title } from '../components/Title'
import portrait from '../assets/portrait.png'

export default function About(): JSX.Element {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <Title title={"Hello I'm Fanny, a Frontend Developer."} />
                <p>
                    I'm a Frontend Developer based in France since 2018. I would like to be a Creative Developer, doing Web Design and UX/UI.
                    <br />
                    I like draw, create and code at the same time.
                </p>
            </div>
            <div className={'group-buttons'}>
                <button>Contact me</button>
                <button>View work</button>
            </div>
            <div className={'group-medias'}>
                <button>Linkedin</button>
                <button>Github</button>
                <button>Twitter</button>
                <button>Blog</button>
            </div>
            <div className={'container-img'}>
                <div className='background-one'></div>
                <div className='background-two'></div>
                <img src={portrait} alt="Portrait of a developer girl" />
            </div>
        </div>
    )
}