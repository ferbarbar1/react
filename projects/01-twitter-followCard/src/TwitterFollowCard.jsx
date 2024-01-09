import { useState } from "react";

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    /* son lo mismo
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
    */

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt={"El avatar de " + userName} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">
                        {text}
                    </span>
                    <span className="tw-followCard-stopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    );
}