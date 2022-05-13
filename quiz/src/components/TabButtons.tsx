import './tab.css';

interface tabBtnsProps{
    tabsOptions: string[];
    onSelection: Function;
    selection?: number;
}

export function TabButtons(props: tabBtnsProps){

    const buttons = props.tabsOptions.map( (txt, index) => (
        <button
            key={ txt }
            className={ index === props.selection ? 'selected' : ''}
            onClick={ () => props.onSelection(index) }
        >
            { txt }
        </button>
    ));

    return(
        <div className='tabButtonsCSS'>
            { buttons }
        </div>
    );
}
