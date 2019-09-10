import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  timelineItems = [
    {
      start: '2012-01-01',
      end: '2012-12-01',
      details: 'one'
    },
    {
      start: '2012-12-01',
      end: '2015-12-01',
      details: 'two'
    },
    {
      start: '2015-12-01',
      end: '2017-12-01',
      details: 'three'
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      timelineWidth: 0,
      selectedItem: ''
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      timelineWidth: this.containerRef.current.clientWidth
    });

  }
  
  ListItem(props) {
    let beginMillis = new Date(props.items[0].start).getTime();
    let endMillis = new Date(props.items[props.items.length-1].end).getTime();
    let scale = props.fitWidth/(endMillis-beginMillis);
    
    return(props.items.map((item, index) => {
        let itemWidth = (new Date(item.end).getTime() - new Date(item.start).getTime())*scale;
        return <li className={props.selected == item? 'selected':''} key={index} style={{width: itemWidth-7 }} onMouseOver={()=> props.hover(item)}><span>{index}</span></li>
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
        <p>{this.state.selectedItem.details}</p>
      </div>
    );
  }
}

export default Timeline;