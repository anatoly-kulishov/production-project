import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import { IPageErrorProps } from './PageError.declarations';

import cls from './PageError.module.scss';

export const PageError = ({ className }: IPageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={cls.PageErrorTitle}>{t('unexpectedError')}</p>
            <Button onClick={reloadPage}>
                {t('refreshThePage')}
            </Button>
        </div>
    );
};
