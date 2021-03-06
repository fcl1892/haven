import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { primaryTextColor, borderColor } from '../commonColors';

const styles = {
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor,
  },
  textStyle: {
    flex: 1,
    color: primaryTextColor,
    fontSize: 15,
    paddingRight: 15,
  },
};

export default class SearchFilterHeader extends PureComponent {
  render() {
    const {
      total,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        {total ? (<Text style={styles.textStyle} numberOfLines={1}>{`${total} results`}</Text>)
          : (<View style={{ flex: 1 }} />)}
      </View>
    );
  }
}
