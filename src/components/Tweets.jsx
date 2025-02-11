import { useContext } from 'react';
import { AppContext, ThemeContext } from '../App';
import Tweet from './Tweet';
import CreateTweet from './CreateTweet';

export default function Tweets() {
    const { theme} = useContext(ThemeContext);
    const { user, setTweets, tweets } = useContext(AppContext);
    return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={tweets} setTweets={setTweets} user={user} theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}