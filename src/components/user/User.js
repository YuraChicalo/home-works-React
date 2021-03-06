import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserPosts from "../userPosts/UserPosts";

export default function User({users:{id, name}, selectUser, postsOfUser}) {
    return (
        <Router>
        <div>
            {id} - {name} - <Link to={'/users/'+ id +'/posts'}>posts</Link>
            <Switch>
                <Route path={'/users/'+ id +'/posts'} render={()=>{
                    return <UserPosts id={id}/>
                }}/>
            </Switch>

        </div>
        </Router>
    );
}