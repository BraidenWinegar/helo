import React, {Component} from 'react'
import Axios from 'axios';


class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }

    }

    handleInput = (e) => {
        this.setState({
            [e.name]: e.value
        })
    }

    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = () => {
        this.getAllPosts()
        Axios.get('/api/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(err => console.log(err))
    }

    reset = () => {
        this.getAllPosts()
        this.setStates({
            search: ''
        })
    }

    search = () => {
        this.setState({
            posts: this.state.posts.filter(this.state.search)
        })
    }

    render(){

        this.state.posts.map((e, i) =>)

        return(
            <div>
                <div>
                    <input type='text' name='search' value={this.state.search}/>
                    <image onClick={this.search} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC' />
                    <button onClick={this.reset}>Reset</button> 
                    <div>My Posts</div>
                    <input type='checkbox' />
                </div>
            </div>
        )
    }
}

export default Dashboard;