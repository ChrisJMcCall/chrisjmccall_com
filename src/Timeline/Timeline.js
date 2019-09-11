import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  timelineItems = [
    {
      start: '2007-06-01',
      end: '2011-06-01',
      title: 'Sr. Web Designer',
      location: 'Royall & Company',
      details: 'Provide user interface and UX design, usability analysis, and screen design. Manage project timelines for deadlines and deployment dates. Contribute to UI usability direction and implementation. Testing for improved marketing. Collaboration on development of new web products and interactions. Ensure cross-platform quality of web applications.'
    },
    {
      start: '2011-06-01',
      end: '2012-11-01',
      title: 'Front End Developer',
      location: 'eProcessingNetwork',
      details: 'Build wireframes and prototypes for user interface and experience. Design production-ready screens and all UI elements. Write PERL modules and Javascript to extend functionality of site based on wireframes. Collaborate with customer service and sales teams to optimize the user experience. Write extensions for multiple existing eCommerce plugins to support the eProcessing payment gateway.'
    },
    {
      start: '2012-11-01',
      end: '2016-11-01',
      title: 'Mobile/Front End Developer',
      location: 'World GPS Solutions',
      details: 'Developed and managed the deployment of 8+ mobile applications to the Apple App Store and Google Play Store. Design wireframes and interfaces for mobile, desktop, and web applications. Coordinate with desktop, web, mobile and hardware teams to ensure project goals are achieved.'
    },
    {
      start: '2016-11-01',
      end: Date.now(),
      title: 'Sr. Full Stack Developer',
      location: 'CPaT Global',
      details: 'Managed the development, deployment and migration of a global-scale software platform to Microsoft Azure cloud services. Lead the design and product development of all legacy and new software. Develop processes to ensure code quality. Coordinated system migrations and upgrades.'
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      timelineWidth: 0,
      selectedItem: this.timelineItems[this.timelineItems.length-1]
    };
    this.containerRef = React.createRef();
  }

  resize = () => this.setState({
    timelineWidth: this.containerRef.current.clientWidth
  });

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  ListItem(props) {
    let beginMillis = new Date(props.items[0].start).getTime();
    let endMillis = new Date(props.items[props.items.length-1].end).getTime();
    let scale = props.fitWidth/(endMillis-beginMillis);
    
    return(props.items.map((item, index) => {
        let itemWidth = (new Date(item.end).getTime() - new Date(item.start).getTime())*scale;
        return <li className={(props.selected === item)? 'selected':''} key={index} style={{width: itemWidth-5 }} onMouseOver={()=> props.hover(item)}><span>{new Date(item.start).getFullYear()}&nbsp;-&nbsp;{new Date(item.end).getFullYear()}</span></li>
      })
    );
  }

  render() {
    return (
      <div className="Timeline">
        <ul ref={this.containerRef}>
          <this.ListItem 
          selected={this.state.selectedItem}
          items={this.timelineItems} 
          fitWidth={this.state.timelineWidth}
          hover={(item)=> this.setState({selectedItem:item})}
          ></this.ListItem>
        </ul>
        {/*For SEO I will probably change this to be css driven rather than actually changing the DOM.*/}
        <h4>{this.state.selectedItem.title}</h4>
        <h5>{this.state.selectedItem.location}</h5>
        <p>{this.state.selectedItem.details}</p>
      </div>
    );
  }
}

export default Timeline;