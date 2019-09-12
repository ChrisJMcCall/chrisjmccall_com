import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  timelineItems = [
    {
      start: '2007-06-01',
      end: '2011-06-01',
      title: 'Sr. Web Designer',
      location: 'Royall & Company',
      details: [
        'Manage the complete SDLC of a global-scale SaaS product.',
        'Architect solutions using Microsoft Azure cloud services.',
        'Develop CI/CD processes to ensure code quality and establish devops.',
        'Coordinate system migrations, upgrades, and third-party integrations.',
        'Lead the design and product development of internal software.']
    },
    {
      start: '2011-06-01',
      end: '2012-11-01',
      title: 'Front End Developer',
      location: 'eProcessingNetwork',
      details: [
        'Develop and manage the deployment of 8 mobile applications to the Apple App Store and Google Play Store.',
        'Develop native and html5 based applications for iOS and Android.',
        'Develop mobile applications that communicate with custom BLE 4.0 hardware.',
        'Design wireframes and interfaces for mobile, desktop, and web applications.',
        'Manage product roadmaps between desktop, web, mobile and hardware teams.'
        ]
    },
    {
      start: '2012-11-01',
      end: '2016-11-01',
      title: 'Mobile/Front End Developer',
      location: 'World GPS Solutions',
      details: [
        'Develop UI wireframes and UX prototypes. ',
        'Design production-ready screens, UI elements, and prepare assets for development.',
        'Write PERL and Javascript modules for the core web product. ',
        'Collaborate with customer service and sales teams to meet customer needs. ',
        'Develop extensions for eCommerce plugins to support the eProcessing payment gateway.'
        ]
    },
    {
      start: '2016-11-01',
      end: Date.now(),
      title: 'Sr. Full Stack Developer',
      location: 'CPaT Global',
      details: [
        'Provide UI/UX design, and usability analysis.',
        'Plan and deliver projects for strict deployment dates.',
        'Create and deploy tests for results-driven marketing.',
        'Perform cross-platform/browser tests for web applications.'
      ]
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
        return <li className={(props.selected === item)? 'selected':''} key={index} style={{width: itemWidth-5 }} onClick={()=> props.clicked(item)} onMouseOver={()=> props.hover(item)}><span>{new Date(item.start).getFullYear()}&nbsp;-&nbsp;{new Date(item.end).getFullYear()}</span></li>
      })
    );
  }

  render() {
    return (
      <div className="Timeline">
        <ul className="Timeline" ref={this.containerRef}>
          <this.ListItem 
          selected={this.state.selectedItem}
          items={this.timelineItems} 
          fitWidth={this.state.timelineWidth}
          clicked={(item)=> this.setState({selectedItem:item})}
          hover={(item)=> this.setState({selectedItem:item})}
          ></this.ListItem>
        </ul>
        {/*For SEO I will probably change this to be css driven rather than actually changing the DOM.*/}
        <h4>{this.state.selectedItem.title}</h4>
        <h5>{this.state.selectedItem.location}</h5>
        <ul className="ExperienceDescription">
          {this.state.selectedItem.details.map((item)=><li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default Timeline;