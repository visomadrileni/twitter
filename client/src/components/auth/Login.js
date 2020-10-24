import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {loginUser} from '../../actions/auth';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            indentifier: '',
            password: '',
            errors: {},
            signupModal: false,
            loginModal: false
        } 
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/');
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    toggleSigupButton = () => {
        this.setState({ signupModal: true})
    }

    toggleLoginButton = () => {
        this.setState({ loginModal: true})
    }

    onSubmit = (e) => {
         e.preventDefault();
         const {indentifier,password} = this.state;
         const userData = {indentifier,password};
         const {dispatch} = this.props;
         this.props.loginUser({userData,dispatch});
    }

    render(){
        const {indentifier,password,signupModal,loginModal} = this.state;

        return(
            <div className="content">
                <div className="part1">
                  <p>
                     <SearchIcon style={{marginBottom:"-7px",paddingRight:"5px"}}/>  Follow your intersets
                  </p>
                  <p>
                     <AccountCircleIcon style={{marginBottom:"-7px",paddingRight:"5px"}}/>  Hear what people are talking about
                  </p>
                  <p>
                     <ChatBubbleOutlineIcon style={{marginBottom:"-7px",paddingRight:"5px"}} />  Join the conversation
                  </p>
                </div>
                <div className="part2">
                      <form onSubmit={this.onSubmit}>
                        <input type="text" name="indentifier" value={indentifier} onChange={this.onChange} placeholder="Phone,email or username" />
                        <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" />
                        <input type="submit" value="Log in" />
                      </form>
                      <a href="https://twitter.com/account/begin_password_reset">Forgot password?</a>
                      <span>
                        <TwitterIcon style={{color:"#33A2FF",marginBottom:"-30px",marginLeft:"-110px"}} fontSize="large" />
                        <h3>See what’s happening in the world right now</h3>
                      </span>
                      <div className="register">
                          <h6>Join Twitter today.</h6>
                          <button onClick={this.toggleSigupButton}>Sign up
                            {signupModal ? <SignupForm /> : null}
                          </button>
                          <button onClick={this.toggleLoginButton}>Log in
                             {loginModal ? <LoginForm /> : null}
                          </button>
                      </div>
                </div>
                <nav >
                    <a href="https://about.twitter.com/">About</a>
                    <a href="https://help.twitter.com/en">Help Center</a>
                    <a href="https://twitter.com/en/tos">Terms</a>
                    <a href="https://twitter.com/en/privacy">Privat Policy</a>
                    <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookies</a>
                    <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html">Ads Info</a>
                    <a href="https://blog.twitter.com/">Blog</a>
                    <a href="https://status.twitterstat.us/">Status</a>
                    <a href="https://careers.twitter.com/">Jobs</a>
                    <a href="https://about.twitter.com/en_us/company/brand-resources.html">Brand</a>
                    <a href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise">Advertise</a>
                    <a href="https://marketing.twitter.com/en">Marketing</a>
                    <a href="https://business.twitter.com/">Business</a>
                    <a href="https://developer.twitter.com/en">Developers</a>
                    <a href="https://twitter.com/i/directory/profiles">Directory</a>
                    <a href="https://twitter.com/settings/account/personalization">Settings</a>
                    <span>© 2020 Twitter, Inc.</span>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps,{loginUser})(Login);