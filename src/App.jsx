import React from 'react'
import './App.css'
import TwitterFollowCard from './twitterfollowcard'


export default function App () {

    return (
    <section className="App">
    <TwitterFollowCard userName="midudev" initialIsFollowing>
        Miguel Angel Duran
    </TwitterFollowCard>

    <TwitterFollowCard userName="raipod" initialIsFollowing={false}>
        Andres Eduardo Vera
    </TwitterFollowCard>
    </section>
    )
}