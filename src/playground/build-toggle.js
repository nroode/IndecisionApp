//visibility toggle - render, constructor, handleToggleVisibility
//visibility - false;


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>

                {this.state.visibility && (
                    <p>Now you see me</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visible = false;

// const showDetails = () => {
//     visible = !visible;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1> 
//             <button onClick={showDetails}>
//             {visible ? 'hide details' : 'show details'}
//             </button>

//                 {visible && (
//                     <p>Now you see me</p> 
//                 )}

//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderApp();