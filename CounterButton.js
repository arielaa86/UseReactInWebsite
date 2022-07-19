const CounterButton = (props) => {

    const {start, label} = {...props}
    const [count, setCount] = React.useState(+start)

    return <button type="button" onClick={()=> setCount(count +1 )}>{label} ({count})</button>
}

const buttons = document.getElementsByTagName('CounterButton');

[...buttons].forEach(element => {
    const props = element.getAttributeNames().reduce((acc, name) => {
        return {...acc, [name]: element.getAttribute(name)};
    }, {});

    ReactDOM.render(<CounterButton props={props} />, element );
});
