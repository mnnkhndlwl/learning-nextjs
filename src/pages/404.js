import Link from "next/link";

const PageNotFound = () => {
    return <div>
    <h1>
        Page not found !
        <Link href='/'>
            Click here to go to home
        </Link>
    </h1>
    </div>
}

export default PageNotFound;