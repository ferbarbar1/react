import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'wongmjane',
        name: 'Jane Manchun Wong',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'duki',
        name: 'Mauro Ezequiel Lombardo',
        isFollowing: true
    },
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )) 
            }
        </section>
    );
}