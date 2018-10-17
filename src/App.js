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
      <h1 className='title-docker'>Path <span>/Docker/</span></h1>
      <ul>
        <div className='DockerHub_Dockerfile_WebDav'><li><img src={require('./img/folder.gif')} alt="[DIR]" className='img-DockerHub_Dockerfile_WebDav'/><Link to="/Docker/DockerHub_Dockerfile_WebDav">DockerHub_Dockerfile_WebDav</Link></li></div>
     </ul>
     <hr/>
  </div>
);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const DockerHub_Dockerfile_WebDav = () => (
  <div>
    <h1 className='title-DockerHub_Dockerfile_WebDav'>Path <span>/Docker/DockerHub_Dockerfile_WebDav/</span></h1>
      <ul>
        <div className='installsh'><li><img src={require('./img/file.gif')} alt="[FILE]" className='img-installsh'/>install.sh<a href='..\files\Docker\DockerHub_Dockerfile_WebDav\install.sh' download><div className='bouton-download'>Download</div></a><ReactCopyButtonWrapper text='https://test-file-public.netlify.com/files/Docker/DockerHub_Dockerfile_WebDav/install.sh'><button className='bouton-download-link'>Copy Download Link</button></ReactCopyButtonWrapper></li></div>
      </ul>
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
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <div className="App">
      <h1 className='title-'>Path <span>/</span></h1>
        <ul>
          <div className='home'><li><img src={require('./img/home.gif')} alt="[HOMEDIR]" className='img-homedir'/><Link to="/">Home</Link></li></div>
          <div className='docker'><li><img src={require('./img/folder.gif')} alt="[DIR]" className='img-docker'/><Link to="/Docker">Docker</Link></li></div>
        </ul>

        <Route path="/" component={Home}/>
        <Route path="/docker" component={Docker}/>
        <Route path="/Docker/DockerHub_Dockerfile_WebDav" component={DockerHub_Dockerfile_WebDav}/>
      </div>
    );
  }
}

export default App;