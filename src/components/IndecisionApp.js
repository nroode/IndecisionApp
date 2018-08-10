import React from 'react';
import AddOption from './AddOption.js';  //can also leave off .js and this is valid like below
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }


    //pass down the props to the object instance
    //pass down the function which will allow Options to do something to the parent
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))

    };

    //lifecycle methods, only avail in class based components
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }


    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }

    }
    componentWillUnmount() {
        condole.log('unmount')
    }





    render() {

        const subtitle = 'Put your life in the hands of a computer';


        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal} />
            </div>
        );
    };
}

export default IndecisionApp;