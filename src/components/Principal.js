import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, Dimensions
} from 'react-native';
import { TabViewAnimated, SceneMap} from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Chamados from './Chamados';
import Clientes from './Clientes';
import Tecnicos from './Tecnicos';

// Corrige problemas de compatibilidade tamanho da tela
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};


export default class Principal extends React.Component {    
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Chamados' },
            { key: '2', title: 'Clientes' },
            { key: '3', title: 'Tecnicos' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBarMenu {...props }/>;
  
    _renderScene = SceneMap({
      '1': Chamados,
      '2': Clientes,
      '3': Tecnicos,
    });
  
    render() {
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      );
    }
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });