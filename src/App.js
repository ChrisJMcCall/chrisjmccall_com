import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentGroup 
        title="Journey" 
        icon="images/compass.svg"
        content={<Timeline />}
        />
        <ContentGroup 
        title="Projects" 
        icon="images/90rule.svg"
        content={
          <HrefList 
          links={[
            {href:'https://github.com/ChrisJMcCall/chrisjmccall_com',
            hrefLabel:'view code',
            type:'Website',
            title:'ChrisJMcCall.com',
            description: 'The code behind this website.',
            tags: ['react.js']
            },
            {href:'https://github.com/ChrisJMcCall/BaseNetcoreWebApi',
            hrefLabel:'view code',
            type:'Web API',
            title:'Base Web API',
            description: 'A starting point for a Web API using Netcore, Entity framework, and JWT for authentication.',
            tags: ['netcore']
            }]}
          />}
        />
        <div className="Footer"></div>
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
          <a href="files/chrisjmccall_resume.pdf">Get my r&eacute;sum&eacute;</a>
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
      <h5>{link.title}</h5>
      <h6>{link.type}</h6>
      <a href={link.href}>{link.hrefLabel}</a>
      <p>{link.description}</p>
      {link.tags.map((item)=><span key={index+'t'} className="tag">{item}</span>)}
    </li>)
  });

  render() {
    return (<ul className="HrefList">{this.listItems}</ul>);
  }
}

export default App;