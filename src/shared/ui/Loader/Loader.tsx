import { classNames } from 'shared/lib';

import { ILoaderProps } from './Loader.declarations';

import './Loader.scss';

export const Loader = ({ className }: ILoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
