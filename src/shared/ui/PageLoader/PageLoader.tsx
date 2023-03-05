import { classNames } from 'shared/lib';

import { Loader } from '../Loader';

import { IPageLoaderProps } from './PageLoader.declarations';

import cls from './PageLoader.module.scss';

export const PageLoader = ({ className }: IPageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
