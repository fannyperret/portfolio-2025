import { JSX } from 'react'
import { Title } from '../components/Title'

export default function Contact(): JSX.Element {
    return (
        <div>
            <Title title={'Contact me...'} />
            <p>If you want to talk about code :)</p>
            <form action="">
                <div>
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder="Your name here..." />
                </div>
                <div>
                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder="Your email here..." />
                </div>
                <div>
                    <label htmlFor="">Your message</label>
                    <textarea name="" id="" placeholder='Your message here...'></textarea>
                </div>
            </form>
        </div>
    )
}