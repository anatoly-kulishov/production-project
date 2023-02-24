import {useState} from "react";

import {classNames} from "shared/lib";
import {LangSwitcher, ThemeSwitcher} from "shared/ui";

import {SidebarProps} from "./Sidebar.declarations";

import cls from './Sidebar.module.scss';
import {useTranslation} from "react-i18next";

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

