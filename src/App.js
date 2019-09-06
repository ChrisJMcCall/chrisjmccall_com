import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentGroup 
        title="Journey" 
        icon="images/compass.svg"
        content=""
        />
        <ContentGroup 
        title="Projects" 
        icon="images/90rule.svg"
        content={
          <HrefList 
          links={[
            {href:'https://github.com/ChrisJMcCall/BaseNetcoreWebApi', 
            title:'Base Web API',
            description: 'A starting point for a Web API using Netcore, Entity framework, and JWT for authentication.'
            }]}
          />}
        />
      </div>
    );
  }
}

class Header extends Component {
  render () {
    return (
    <div className="Header">
      <div className="Header-content">
        <h1><span className="sr-only">ChrisJMcCall.com</span></h1>
        <div className="Header-intro">
          <h2>I&rsquo;m Chris McCall and I love creating things</h2>
          <p>I have been creating software for over 10 years on the web, desktop, and mobile devices. Most notably I have developed global-scale core business platforms, real-time data analytic applications, eCommerce solutions, and national-scale marketing campaigns.</p>
          <a>Get my r&eacute;sum&eacute;</a>
        </div>
        <ul className="Header-social">
          <li><a href="https://github.com/ChrisJMcCall">github</a></li>
          <li><a href="https://www.linkedin.com/in/chris-mccall-4508543/">linkedIn</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

class ContentGroup extends Component {
  hStyle = {
    background: "url("+this.props.icon+")",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat"
  };

  render() {
    return (
      <div className="Contentgroup">
        <h4 style={this.hStyle}><span>{this.props.title}</span></h4>
        <div className="Contentgroup-content">{this.props.content}</div>
      </div>
    );
  }
}

class HrefList extends Component {
  listItems = this.props.links.map((link, index) => {
    return (<li key={index}>
      <p>{link.description}</p>
      <a href={link.href}>{link.title}</a>
    </li>)
  });

  render() {
    return (<ul>{this.listItems}</ul>);
  }
}

export default App;