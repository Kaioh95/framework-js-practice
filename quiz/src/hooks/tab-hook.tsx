import { useState } from "react";
import { TabProps } from "../components/tab";

export function useTab(){
    const [tbUp, setTab] = useState<TabProps>({tabButtons: ['Tab'], tabText: ['Sem Conteúdo']})

    const createTab = (tb: TabProps) => {
        setTab(tb)
    }

    return { tbUp, createTab}
}