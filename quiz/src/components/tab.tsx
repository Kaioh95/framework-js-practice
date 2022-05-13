import React, { useState } from 'react';
import './tab.css';
import {TabButtons} from './TabButtons';
import {TabContent} from './TabContent';

const tabButtons = ["tab 1", "tab 2", "tab 3", "tab 4"];
const tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];

export function Tab(){
    const [currentTab, setCurrentTab] = useState<number>();

    function select(tabIndex: number){
        setCurrentTab(tabIndex);
    }

    return(
        <div className='tabPane'>
            <TabButtons
                tabsOptions = { tabButtons }
                onSelection={ select }
                selection={ currentTab }
            />

            <TabContent
                contents={ tabText }
                currentTab={ currentTab }
            />
        </div>
    );
}


/*interface tabProps {
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
}*/