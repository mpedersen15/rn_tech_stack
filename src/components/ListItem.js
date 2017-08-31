import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    LayoutAnimation,
    UIManager,
    Platform 
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from './../actions';

class ListItem extends Component {

    constructor() {
        super();
        if (Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { expanded, library } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { title, id } = this.props.library;
        const { titleStyle } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection >
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        expanded: state.selection === ownProps.library.id
    };
};
export default connect(mapStateToProps, actions)(ListItem);
