import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import performance from '../../modules/performance';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

import OrderedFile from './OrderedFile';

const SortableItem = SortableElement(({title, order, fileId, isSelected}) =>
  <OrderedFile
    title={title}
    order={order}
    fileId={fileId}
    isSelected={isSelected}
    />
);

const SortableList = SortableContainer(({items}) =>
  <div>
    {items.map(({title, fileId, isSelected}, index) =>
      <SortableItem
        key={`item-${index}`}
        index={index}
        title={title}
        order={index + 1}
        fileId={fileId}
        isSelected={isSelected} />
    )}
  </div>
);

class OrderedFileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {title: "セクション１", fileId: "section1", isSelected: true},
        {title: "セクション２", fileId: "section2", isSelected: false},
      ],
    };

    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  }

  render() {
    performance("OrderedFileMenu");
    const style = { width: "100%" };
    const addButtonStyle = { width: "100%", height: "35px" };
    const iconStyle = {top: "-2px", fontSize: "25px"};
    return (
      <div className="OrderedFileMenu" style={style}>
        <FlatButton
          style={addButtonStyle}
          icon={<FontIcon className="material-icons" style={iconStyle}>add_box</FontIcon>} />
        <Divider />
        <br />
        <SortableList
          items={this.state.items}
          onSortEnd={this.onSortEnd}
          lockAxis="y"
          pressDelay={200}
          lockToContainerEdges={true}
          helperClass={"DraggingOrderedFile"}
          />
        <style>
          {`
            .OrderedFile {
              transition: background-color 0.15s linear;
              cursor: pointer;
              cursor: hand;
            }
            .OrderedFile:hover {
              background: rgba(200,200,200, 0.4);
              transition: background-color 0.15s linear;
            }
            .DraggingOrderedFile {
              background: rgba(230,230,230, 0.4);
              box-shadow:0px 0px 3px 0px #8c8c8c;
              -moz-box-shadow:0px 0px 3px 0px #8c8c8c;
              -webkit-box-shadow:0px 0px 3px 0px #8c8c8c;
            }
          `}
        </style>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.orderedFileMenu.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedFileMenu);
