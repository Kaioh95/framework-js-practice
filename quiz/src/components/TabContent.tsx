import './tab.css'

interface tabContentProps{
    contents: string[];
    currentTab?: number;
}

export function TabContent(props: tabContentProps){

    return(
        <div className='tabContentPane'>
            { props.currentTab != undefined ? props.contents[props.currentTab] : 'Texto do tab não selecionado' }
        </div>
    );

}