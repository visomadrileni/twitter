import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginUser} from '../../actions/auth';
import TwitterIcon from '@material-ui/icons/Twitter';
import './LoginForm.css';

 class LoginForm extends Component{
     state = {
         indentifier: "",
         password: ""
     }

     onChange = e => {
         this.setState({ [e.target.name]: e.target.value})
     }

     onSubmit = (e) => {
        e.preventDefault();
        const {indentifier,password} = this.state;
        const userData = {indentifier,password};
        this.props.loginUser({userData},this.props.dispatch);
     }

     render(){
        const {indentifier,password} = this.state;

        return (
                 <div className="loginModal">
                    <div class="loginForm">
                        <TwitterIcon style={{color:"#33A2FF"}} fontSize="large" />
                        <h2>Login to Twitter</h2>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" name="indentifier" value={indentifier} onChange={this.onChange} placeholder="Phone,email or username" />
                            <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" />
                            <button type="submit" value="Log in">Log in</button>
                        </form>
                      <div className="linkes">
                         <a href="https://twitter.com/account/begin_password_reset">Forgot Password ? -</a>
                         <a href="/register"> Sign up for Twitter</a>           
                      </div>  
                   </div>                 
              </div>
           );
     }
 }

 export default connect(null,{loginUser})(LoginForm);