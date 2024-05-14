import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const users = [
    {
        id: 1,
        name: "SirMarkus",
        username: "SirMarkus73",
        isFollowing: true,
    },
    {
        id: 2,
        name: "Golo",
        username: "golobtw",
        isFollowing: false,
    }
]


export function App() {
    return (
        <section className={"App"}>
            {
                users.map(({id, username, isFollowing, name}) => (
                    <TwitterFollowCard
                        key={id}
                        userName={username}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))

            }
        </section>
    )
}
