import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../text';
import {styles} from './styles';
import {IProps, IStates} from './type.d';

export class RadioButtonGroup extends Component<IProps, IStates> {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  componentWillMount() {
    const {initialValue} = this.props;
    if (initialValue) {
      this.setState({
        selected: initialValue
      });
    }
  }

  onSelect = val => {
    const {
      input: {onChange},
      onChangeCallback
    } = this.props;

    onChange(val);
    onChangeCallback?.(val);
    this.setState({selected: val});
  };

  render() {
    const {options, hint, theme} = this.props;
    const {selected} = this.state;

    return (
      <View style={styles.fieldContainer}>
        {hint && (
          <Text
            h5
            color={theme?.viewLabel?.primaryColor}
            bold2={theme?.mode === 'dark'}
            style={styles.hintStyle}
          >
            {hint}
          </Text>
        )}
        <View style={styles.buttonGroupContainer}>
          {options.map(item => (
            <TouchableOpacity
              key={item.key}
              style={styles.buttonContainer}
              onPress={() => this.onSelect(item.key)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.circle(theme),
                  selected === item.key && styles.checkedCircle
                ]}
              >
                <View style={styles.middleCircle(theme)} />
              </View>
              <Text
                h5
                color={theme?.viewLabel?.primaryColor}
                medium={theme?.mode === 'dark'}
                style={
                  selected === item.key && {
                    color: theme?.viewLabel?.thirdColor
                  }
                }
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
