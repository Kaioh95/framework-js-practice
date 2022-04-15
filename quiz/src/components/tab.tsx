import React, { useState } from 'react';
import './tab.css'

const tabButtons = ["tab 1", "tab 2", "tab 3", "tab 4"];
const tabText = ["primeiro", "segundo", "terceiro", "quarto"];

export function Tab(){
    const [currentTab, setCurrentTab] = useState<number>();

    function select(tabIndex: number){
        setCurrentTab(tabIndex);
    }

    return(
        <div className='tabPane'>
            <TabOptions
                tabsOptions = { tabButtons }
                onSelection={ select }
                selection={ currentTab }
            />

            <div className='tabContentPane'>
                Texto do { currentTab != undefined ? tabText[currentTab] + ' tab' : 'tab não selecionado' }
            </div>
        </div>
    );
}


interface tabProps {
    tabsOptions: string[]
    onSelection: Function
    selection?: number
}

function TabOptions(props: tabProps){
    const buttons = props.tabsOptions.map( (txt, index) => (
        <button key={ txt }
            className={ index === props.selection ? 'selected' : '' }
            onClick={ () => props.onSelection(index) }
        >
            {txt}
        </button>
    ));

    return (
        <div className='tabButtonsCSS'>
            { buttons }
        </div>
    );
}