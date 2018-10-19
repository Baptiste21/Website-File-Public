import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReactCopyButtonWrapper from 'react-copy-button-wrapper';
import Loading from './loading';
import './App.css';
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Home = () => (
  <div>
    <hr/>
  </div>
);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Docker = () => (
  <div>
      <h1 className='title-docker'>Path= /Docker/</h1>
      <ul>
        <div className='DockerHub_Dockerfile_WebDav'><li><img src={require('./img/folder.gif')} alt="[DIR]" className='img-DockerHub_Dockerfile_WebDav'/><Link className='link-folder' to="/Docker/DockerHub_Dockerfile_WebDav">DockerHub_Dockerfile_WebDav</Link></li></div>
     </ul>
     <br></br>
     <hr/>
  </div>
);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const DockerHub_Dockerfile_WebDav = () => (
  <div>
    <h1 className='title-DockerHub_Dockerfile_WebDav'>Path= /Docker/DockerHub_Dockerfile_WebDav/</h1>
      <ul>
        <div className='installsh'><li><img src={require('./img/file.gif')} alt="[FILE]" className='img-installsh'/>install.sh<a href='..\files\Docker\DockerHub_Dockerfile_WebDav\install.sh' download><div className='bouton-download'>Download</div></a><ReactCopyButtonWrapper text='https://file-public.herokuapp.com/files/Docker/DockerHub_Dockerfile_WebDav/install.sh'><button className='bouton-download-link'>Copy Download Link</button></ReactCopyButtonWrapper></li></div>
      </ul>
      <br></br>
     <hr/>
  </div>
);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class App extends Component {
  state = {
    loading: true
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1300);
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <div className="App">
      <h1 className='title'>Path= /</h1>
        <ul>
          <div className='home'><li><img src={require('./img/home.gif')} alt="[HOMEDIR]" className='img-homedir'/><Link className='link-folder' to="/">Home</Link></li></div>
          <div className='docker'><li><img src={require('./img/folder.gif')} alt="[DIR]" className='img-docker'/><Link className='link-folder' to="/Docker">Docker</Link></li></div>
        </ul>
        <br></br>
      <span className='info-create'><span className='text-info-create'>Created with ReactJS</span><img src={require('./img/reactjs-logo.png')} alt="[LOGO-REACTJS]" className='img-info-create'/></span>
      <a className='report-problem' href="mailto:yoanndelattre21@gmail.com">Report a Problem</a>
        <Route path="/" component={Home}/>
        <Route path="/docker" component={Docker}/>
        <Route path="/Docker/DockerHub_Dockerfile_WebDav" component={DockerHub_Dockerfile_WebDav}/>
      </div>
    );
  }
}

export default App;