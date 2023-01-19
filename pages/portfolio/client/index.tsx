import Link from "next/link";

export default function Client() {

    const clients = [
        {id: 'max', name: 'Maximilian'},
        {id: 'manu', name: 'Manuel'}
    ];
    return <div>
        <h1>The Client Page</h1>
        <ul>
            {
                clients.map(d=>
                    <li key={d.id}>
                        {/*<Link href={`/portfolio/client/${d.id}`}>{d.name}</Link>*/}
                        <Link href={{
                            pathname: "/portfolio/client/[id]",
                            query: {id: d.id }
                        }}>{d.name}</Link>
                    </li>
                )
            }
        </ul>
    </div>
};