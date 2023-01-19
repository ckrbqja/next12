import {useRouter} from "next/router";

export default function ClientIdId() {

    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)

    return <div>
        <h1>The ClientIdId Page</h1>
    </div>
};