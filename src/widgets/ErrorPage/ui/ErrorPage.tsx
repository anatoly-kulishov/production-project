import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import { IErrorPageProps } from './ErrorPage.declarations';

import cls from './ErrorPage.module.scss';

export const ErrorPage = ({ className }: IErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('unexpectedError')}</p>
            <Button onClick={reloadPage}>
                {t('refreshThePage')}
            </Button>
        </div>
    );
};
