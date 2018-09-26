import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    title: 'This is title',
    subtitle: 'This is subtitle'
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {

    this.setState(() => ({
      selectedOption: undefined
    }));
    console.info('handleClearSelectedOptions ', this.state.selectedOption);
  };
  handleDeleteOption = option => {
    this.setState(previousState => ({
      options: previousState.options.filter(o => o !== option)
    }));
    console.log('dlo', option);
  };
  handleAddOptions = option => {
    if (!option) {
      return 'No options was entered';
    } else if (this.state.options.includes(option)) {
      return 'Option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };
  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);

    // alert(this.state.options[rand]);
    this.setState((prevState) => ({
      selectedOption: this.state.options[rand]
    }));
    console.info(this.state.selectedOption);
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
      console.log('component did mount ', json);
    } catch (e) {
      console.error();
    }
  };
  componentWillMount = () => {
    console.log('====================================');
    console.log('will mount');
    console.log('====================================');
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log('prevProps ', prevProps);
    console.log('prevState ', prevState);

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickEventHandler={this.handlePick}
        />
        <AddOption addOptionEventHandler={this.handleAddOptions} />
        <Options
          options={this.state.options}
          removeEventHandler={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
