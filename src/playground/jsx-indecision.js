console.log('app js is running');

const appObj = {
    title: 'Indecision App',
    subtitle: 'when you can\'t decide',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = ''; 
    }
    renderApp();
};

const removeAll = () => {
    appObj.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
}



//WHY DO I NEED THIS AFTER OPTION/>

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{appObj.title} </h1> 
            {(appObj.subtitle) && <p>{appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={appObj.options.length === 0} onClick={onMakeDecision}> What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            
    
            <ol>
                {appObj.options.map((option) => <li key={option}> Option: {option}</li>)
            }
        </ol>
        <form onSubmit = {onFormSubmit}>
        <input type="text" name="option"/> 
        <button>Add Option</button>
        
        </form>
        
            </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();








