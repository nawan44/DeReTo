import React, { PureComponent } from "react";
import TopBar from "../../component/view/appBar";
import { startLogin } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


class Login extends PureComponent {
  // const { navigation } = this.props;
  // const navigate = this.props;

  constructor() {
    super();
  //  this.login.bind(this);

    this.state = {
      email: "",
      password: ""
    };


  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    this.props.login(this.state);
    // this.props.history.push("/");
    this.props.navigate("/")
    console.log("state", this.state)

  };

  render() {


    return (
   
          <>
          {/* <TopBar /> */}


          <figure className="h-screen bg-white  mt-24">
          <Grid style={{ margin :"0 ", textAlign:"center", padding :"0 30px",  backgroundColor:"ryellow" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} style={{fontSize:"24px",textAlign:"left", fontWeight:"bold", backgroundColor:"red" }}>
Activity
  </Grid>
  <Grid item xs={6}>
  <Button variant="contained" style={{ backgroundColor:"#16ABF8", borderRadius:"20px" }}>+ Tambah</Button>
  </Grid>
  </Grid>
  <Grid style={{ margin :"0 ", textAlign:"center", padding :" 30px",  backgroundColor:"ryellow" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} style={{fontSize:"24px",textAlign:"left", fontWeight:"bold", backgroundColor:"red" }}>
Activity
  </Grid>
  <Grid item xs={6}>
  <Button variant="contained" style={{ backgroundColor:"#16ABF8", borderRadius:"20px" }}>+ Tambah</Button>
  </Grid>
  </Grid>
          <div className="  w-full  max-w-md  m-auto  text-center pt-5  text-3xl mt-28 mb-8	font-extrabold	">Login</div>
        
          <div className="w-full max-w-md m-auto bg-gray-300 rounded-lg border  border-primaryBorder shadow-default py-10 px-1">
           
            
            <div className="text-primary m-6">
        
          <form>
            <label className="text-left text-gray-600 text-xl	  font-family:roboto font-bold">Email</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-8"
              }
            />
            <label className="text-left text-gray-600 text-xl font-family:roboto font-bold">Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-12"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={ 
                  "bg-blue-700 w-full max-w-md  hover:bg-blue-500 py-2 px-4 text-xl rounded-lg border border-blue focus:outline-none text-white focus:border-blacks"
                }
                value="Login"
                type="submit"
                onClick={this.login}
                >
                Login
              </button>
            </div>
          </form>
        
        </div>
            
          </div>
        </figure>

          </>
      );
        }
  }
  const mapStateToProps = state => {
    return {
      loggedIn: state.loggedIn,
      loginProcessing: state.loginProcessing
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: data => dispatch(startLogin(data))
    };
  };
  // const { navigate } = useNavigate();
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login)

