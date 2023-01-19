import {useRouter} from "next/router";

export default function Slug() {
    const router = useRouter();

    console.log(router.query)

    return <div>
        {(router.query.slug as Array<string> || []).map(d=>
            <p key={d}>{d}</p>
        )}
    </div>
};