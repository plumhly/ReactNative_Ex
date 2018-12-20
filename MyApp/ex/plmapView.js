
import { requireNativeComponent } from 'react-native'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PLMapView extends Component {

  _onRegionChange = (event) => {
    console.log(event.nativeEvent)
  }
  render() {
    return <PLMap {...this.props} onRegionChange={this._onRegionChange}/>
  }
}

PLMapView.proptypes = {
  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnabled: PropTypes.bool,
  region: PropTypes.shape({
    /**
     * 地图中心点坐标
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * 最小/最大经、纬度间的距离。
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  }),
  /**
   * 区域改变回调
   */
  onRegionChange: PropTypes.func
}

export default requireNativeComponent('PLMap', PLMapView);