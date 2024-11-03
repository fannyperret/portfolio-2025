
import { JSX } from 'react'
import { useRouteError } from "react-router-dom"
import { Title } from '../components/Title';

export default function ErrorPage(): JSX.Element {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Title title={"Oops!"} />
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.statusText || error.message}</i> */}
            </p>
        </div>
    )
}