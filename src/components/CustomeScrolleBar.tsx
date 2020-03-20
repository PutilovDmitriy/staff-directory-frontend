import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbarsTable extends Component {    

  render() {
    return (
      <Scrollbars
        style={{width: "75%", marginLeft: '12.5%', marginTop: '4%', boxShadow: '0px 4px 4px rgba(80, 20, 128, 0.5)'}}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={500}
        autoHeight 
        autoHeightMin = { 480 } 
        autoHeightMax = { 480 }
        renderTrackVertical={props => <div {...props} style={{ position: "absolute", height: '420px' ,width: "6px", right: 0, bottom: "2px", top: "58px", borderRadius: "3px" }}/>}
        renderThumbVertical={props => <div {...props} style={{ background: '#ccc', borderRadius: '3px' }}/>}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbarsTable;