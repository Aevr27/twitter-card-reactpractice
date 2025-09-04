import React from 'react'
import './App.css'
import TwitterFollowCard from './twitterfollowcard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'raipod',
        name: 'Andres Eduardo Vera',
        isFollowing: false
    },
    {
        userName: 'Maysh',
        name: 'Santiago Hernandez',
        isFollowing: false
    }
]


export function App () {
    return (
    <section className="App">
        {
        users.map(({userName, name, isFollowing}) => 
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
        }
    </section>
    )
}