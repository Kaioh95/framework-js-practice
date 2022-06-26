import React, { useState } from 'react';
import './tab.css';
import {TabButtons} from './TabButtons';
import {TabContent} from './TabContent';

export interface TabProps {
    tabButtons: string[]
    tabText: string[]
}

/*const tabButtons = ["tab 1", "tab 2", "tab 3", "tab 4"];
const tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];*/

export function Tab(props: TabProps){
    const [currentTab, setCurrentTab] = useState<number>();

    function select(tabIndex: number){
        setCurrentTab(tabIndex);
    }

    return(
        <div className='tabPane'>
            <TabButtons
                tabsOptions = { props.tabButtons }
                onSelection={ select }
                selection={ currentTab }
            />

            <TabContent
                contents={ props.tabText }
                currentTab={ currentTab }
            />
        </div>
    );
}
